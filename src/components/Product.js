import React,{useEffect} from 'react';
import { ProductStyle} from './styles/Product.styled';
import { Grid } from './styles/Helper';
import marketplaceAbi from '../utils/Marketplace.abi.json';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';
// import BigNumber from "bignumber.js";
import { useState } from 'react/cjs/react.development';
import _ from 'lodash';
import { getProduct, getProducts } from '../utils/data';
import { Link } from'react-router-dom';


export default function Product({img,category,name,}) {

    // const products = getProducts()
    const [allProducts, setAllProducts] = useState([]);
    const MPContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

    const displayProducts = async () =>{

        try {
            if (window.celo) {
                const web3 = new Web3(window.celo)
                const kit = newKitFromWeb3(web3);
                const MPContract = new kit.web3.eth.Contract(marketplaceAbi, MPContractAddress);
                const products = await MPContract.methods.displayProduct().call();
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
                console.log(productsCleaned)
                setAllProducts(productsCleaned);
            }
        } catch (error){
            console.error(error);
            console.log('hey')
        }
    }

    // console.log(allProducts)

    useEffect(() => {
        displayProducts();
    }, [])

    return (
        <ProductStyle onLoad={displayProducts}>
        {/* <ProductStyle> */}
            {allProducts.map((product)=>{
                return(
                
                 <>
                    <Grid>
                        <img src={product.image} alt=""></img>
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
                    </Grid>
                  </>)}        
                  )}   

                {/* <Grid>
                  {products.map((product) => {
                      return(
                            <Link to={`/detail/${product.id}`} key={product.id}>
                            <img alt="" src={`./images/${product.image}`}></img>
                            <h2> {product.name} </h2>
                            <p> {product.description} </p>
                            <span>{ product.category} </span>
                            </Link>
                     
                      )
                  })}
                  </Grid> */}
        </ProductStyle>
    )
}
