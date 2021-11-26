import React, {useState} from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import {Button} from '../components/styles/Button.styled';
import { Container, Flex } from '../components/styles/Helper';
import Popup from '../components/Popup';
import Payment from '../components/Payment';

function Detail(props) {
    const [sellPopup, setSellPopup] = useState(false);
    const [buyPopup, setBuyPopup] = useState(false);
    
    const location = useLocation();
    const  product  = location.state
    return (
        <>
            <Header/>
            <Container>
                <Flex>
                <div>
                    <Button onClick={()=> setBuyPopup(true)}>
                        Buy button 
                    </Button>
                        {product.askprice}
                    <Popup trigger={buyPopup} setTrigger={setBuyPopup}>
                        <Payment image={product.image}/>
                    </Popup>
                     
                    <Button onClick= {()=>setSellPopup(true)}>
                        Sell button
                    </Button>
                        {product.bidprice}
                    <Popup trigger={sellPopup} setTrigger={setSellPopup}>
                        <Payment image={product.image}/>
                    </Popup>
                    </div>
                    <img alt="" src={product.image}></img>
                </Flex>
                <p>{product.name}</p>
            </Container>
        </>
    )
}

export default Detail;
