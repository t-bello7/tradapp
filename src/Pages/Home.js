import React, {useState, useRef } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import {Button} from '../components/styles/Button.styled';
import { Container, Flex, Grid } from '../components/styles/Helper'
import Connect from '../components/Connect';
import Popup from '../components/Popup';
import marketplaceAbi from '../utils/Marketplace.abi.json';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';

export default function Home() {
    const MPContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
    const [buttonPopup, setButtonPopup] = useState(false);
    const formInput = useRef(null);
    const form = useRef(null);
    const [name , setName]  = useState('');
    const [imageurl , setImageurl]  = useState('');
    const [description , setDescription]  = useState('');
    const [category , setCategory ]  = useState('cars');
    const [askprice , setAskPrice]  = useState('');



    // const handleProductChange = (e) => {
    //     (e.target.value)
    // }
    const enableNewline = (e) => {
        if (e.which === 13){
          e.preventDefault(); 
         }
      }

    const sellProduct = async(e) => {
        e.preventDefault()
        if (window.celo) {
            const web3 = new Web3(window.celo)
            const kit = newKitFromWeb3(web3);
            const MPContract = new kit.web3.eth.Contract(marketplaceAbi, MPContractAddress);
            try{
            const params = [
                name, 
                imageurl,
                description,
                category,
                askprice,
            ]
            const products = await MPContract.methods.addProduct(...params).send({ from:kit.defaultAccount })
            } catch (error){
                console.error(error);
            }
        }
    }
    return (
        <>  
            <Header/>
            <Connect/>
            <Container>
                <div> 
                    <h4>
                        Buy & Sell Gift Cards, Street Wears, Sneakers, Collectibles
                    </h4>
                    <Button onClick={()=> setButtonPopup(true)}>
                        sell
                    </Button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <form onSubmit={sellProduct} ref={form}>
                            <div>
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Name of product"  autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} ref={form}/> 

                                <label>ImageUrl</label>
                                <input type="text" name="imageurl" placeholder="Enter Image url" autoComplete="off" value={imageurl} onChange={(e)=>setImageurl(e.target.value)} ref={form}/> 

                                <label>Description</label>
                                <input type="textarea" name="description" placeholder="Description" autoComplete="off" onKeyPressCapture={enableNewline}  value={description} onChange={(e)=>setDescription(e.target.value)} ref={form}/>

                                <label>Category</label>
                                <select 
                                    value={category}
                                    onChange={(e)=> setCategory(e.target.value)} ref={form}>
                                    <option value="cars">Cars</option>
                                    <option value="gift_cards">Gift Cards</option>
                                    <option value="collectibles">Collectibles</option>
                                </select>

                                <label>AskPrice</label>
                                <input type="text" name="askprice" value={askprice} onChange={(e)=>setAskPrice(e.target.value)} ref={form}/> 

                                <button>Add a product </button>
                            </div>
                        </form>
                    </Popup>    
                    </div>
                
                <Product/>  
            </Container>
        </>)
}
