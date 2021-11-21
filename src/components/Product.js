import React from 'react';
import { ProductStyle} from './styles/Product.styled';
import { Flex } from './styles/helper';
import marketplaceAbi from '../utils/Marketplace.abi.json';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';
import { useState } from 'react/cjs/react.development';
import _ from 'lodash';
export default function Product({img,category,name,}) {


    const [allProducts, setAllProducts] = useState([]);
    const MPContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

    const displayProducts = async (e) =>{
        e.preventDefault();

        try {
            if (window.celo) {
                const kit = newKitFromWeb3(Web3);
                const MPContract = new kit.web3.eth.Contract(marketplaceAbi, MPContractAddress);
                const products = await MPContract.methods.displayProduct();
                console.log(products);
                let productsCleaned = [];
                products.forEach(product => {
                    productsCleaned.push({
                        id:_.uniqueId(),
                        address: product.owner,
                        name: product.name,
                        image: product.image,
                        description: product.description,
                        category: product.category,
                        askprice: product.askprices,
                        bidprice: product.bidprices,
                        sold: product.sold
                    });
                });

                setAllProducts(productsCleaned);
                console.log(allProducts)
            }
        } catch (error){
            // console.log(error);
        }
    }
    return (
        <ProductStyle onLoad={displayProducts}>
            {allProducts.map((product)=>{
                return(
                
                <div>
                        {/* <img ></img> */}
        
                    <Flex>
                        <h2> Lowest Ask </h2>
                        <p> {product.askprice}</p>

                        <div>
                            <h2> Sold </h2>
                            <p> {product.sold}</p>
                        </div>          
                        <div>
                            <h2> Last Sale </h2>
                            <p> 300 </p>
                        </div>
                    </Flex>
                  </div>)}        
                  )}       
        </ProductStyle>
    )
}
