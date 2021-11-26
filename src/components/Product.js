import React,{useEffect, useState} from 'react';
import { ProductStyle} from './styles/Product.styled';
import { Grid } from './styles/Helper';
import marketplaceAbi from '../utils/Marketplace.abi.json';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';
import _ from 'lodash';
import { Link } from'react-router-dom';


export default function Product() {
    const [allProducts, setAllProducts] = useState([]);
    const MPContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
 
useEffect(()=>{     
    const displayProducts =  async () =>{
        try {
            if (window.celo) {
                const web3 = new Web3(window.celo)
                const kit = newKitFromWeb3(web3);
                const MPContract = new kit.web3.eth.Contract(marketplaceAbi, MPContractAddress);
                const products = await MPContract.methods.displayProduct().call();
                let productsCleaned = [];
                console.log('hey')

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
            }
        } catch (error){
            console.error(error);
        }
    }

    displayProducts();
    },[MPContractAddress]);
   
  
   
    return (
        <ProductStyle >
        <Grid>
            {allProducts.map((product)=>{
                return(
                    <Link to={`/detail/${product.id}`} key={product.id} state={product}>

                        <img src={product.image} alt=""></img>
                        <div>
                            <h2> Lowest Ask </h2>
                            <span> {product.askprice}</span>
                        </div>          
                        <div>
                            <h2> Sold </h2>
                            <span> {product.sold}</span>
                        </div>          
                        
                        </Link>)}        
                  )}   
                </Grid>
        </ProductStyle>
    )
}
