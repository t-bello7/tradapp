import React, {useState, useRef } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import {Button} from '../components/styles/Button.styled';
import { Container} from '../components/styles/Helper'
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
        e.preventDefault();
        if (window.celo) {
            const web3 = new Web3(window.celo)
            const kit = newKitFromWeb3(web3);
            const MPContract = new kit.web3.eth.Contract(marketplaceAbi, MPContractAddress);
            const accounts = await kit.web3.eth.getAccounts();
            kit.defaultAccount = accounts[0]
            const params = [
                name,
                imageurl,
                description,
                category,
                askprice,
            ]
            
            try {
            const productsadd = await MPContract.methods.addProduct(...params).send({ from:kit.defaultAccount })
            console.log(productsadd)
            } catch (error){
                console.error(error);
            }
        }
        else{
            console.log('Celo object doesnt exist')
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
                                <label>Name</label>
                                <input ref={formInput}  type="text" name="name" placeholder="Name of product"  autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} /> 

                                <label>ImageUrl</label>
                                <input ref={formInput} type="text" name="imageurl" placeholder="Enter Image url" autoComplete="off" value={imageurl} onChange={(e)=>setImageurl(e.target.value)} /> 

                                <label>Description</label>
                                <input ref={formInput}  type="textarea" name="description" placeholder="Description" autoComplete="off" onKeyPressCapture={enableNewline}  value={description} onChange={(e)=>setDescription(e.target.value)} />

                                <label>Category</label>
                                <select 
                                    ref={formInput} 
                                    value={category}
                                    onChange={(e)=> setCategory(e.target.value)} >
                                    <option value="cars">Cars</option>
                                    <option value="gift_cards">Gift Cards</option>
                                    <option value="collectibles">Collectibles</option>
                                </select>

                                <label>AskPrice</label>
                                <input ref={formInput} type="text" name="askprice" value={askprice} onChange={(e)=>setAskPrice(e.target.value)} ref={form}/> 

                                <button>Add a product </button>
                            
                        </form>
                    </Popup>    
                    </div>
                
                <Product/>  
            </Container>
        </>)
}
