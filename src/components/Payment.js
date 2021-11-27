import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import { Button } from './styles/Button.styled';
import { newKitFromWeb3 } from '@celo/contractkit';
import erc20abi from "../utils/erc20abi.json"

export default function Payment(props) {
    const MPContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
    const cusdContractAddress = process.env.REACT_CUSD_CONTRACT_ADDRESS

    const approve = async(price) => {
        const web3 = new Web3(window.celo)
        const kit = newKitFromWeb3(web3);
        const cUSDContract = new kit.web3.eth.Contract(erc20abi,cusdContractAddress)
        const accounts = await kit.web3.eth.getAccounts();
        kit.defaultAccount = accounts[0]
        const result = await cUSDContract.methods.approve(MPContractAddress, price).send({ from:kit.defaultAccount})

        return result;
    }
    const [askprice, setAskPrice] = useState('');
    // const [bidprice, setBidPrice] = useState('');

    useEffect( ()=>
    {
        setAskPrice(props.askprice);
        // setBidPrice(props.bidprice);

    }, [askprice])
    return (
        <div>
            <img src={props.image} alt =""/>
            

            {( !(askprice === '') ?
                <Button onClick={()=>{
                        try{
                            approve(askprice)
                        } catch (error){
                                console.error(error);
                        }
                }}>
                    Buy for {askprice}
                </Button>
                        : 
                <div>
                    yeee
                </div>
            )}
       </div>
    )
}
