import { newKitFromWeb3 } from '@celo/contractkit';
import React,{ useEffect, useState} from 'react';
import Web3 from 'web3';
import { Container } from './styles/Helper';
import {Button}  from './styles/Button.styled';
import { ConnectStyle } from './styles/Connect.styled';
export default function Connect() {
    const [currentAccount, setCurrentAccount] = useState("");
    const [userBalance, setUserBalance] = useState("");
    const ERC20_DECIMALS = 18;

    const checkIfWalletIsConnected = async() =>{
        try {
                if (!window.celo) {
                    console.log("Make sure you have celowallet");
                    return
                } 
            } catch (error){
                console.error(error);
            }
        }
    const connectWallet = async() => {
        try {
            await window.celo.enable()

            const web3 = new Web3(window.celo)
            const kit = newKitFromWeb3(web3);

            const accounts = await kit.web3.eth.getAccounts();
            kit.defaultAccount = accounts[0]
            setCurrentAccount(accounts[0]);
            // console.log(currentAccount)
            const totalBalance = await kit.getTotalBalance(kit.defaultAccount);
            const cUSDBalance = totalBalance.cUSD.toNumber() / 1E18;
            setUserBalance(cUSDBalance);

        }   catch (error){
            const message = error.message || "";
            console.error(message)
            if (!message.match(/Already prcoessing/)) { throw error};

            const href = window.location.href;
            console.error(href)
        }
    }
    
    useEffect(() =>{
        checkIfWalletIsConnected();
        // connectWallet();
    }, [])
    return (
        <Container>
            <ConnectStyle.Wrapper>
            { !currentAccount && (
                <Button onClick={connectWallet}>
                    Connect Wallect
                </Button>
            )
            }
            <div>
                    You have {userBalance} cusd
            </div>
            </ConnectStyle.Wrapper>
        </Container>
    )
}
