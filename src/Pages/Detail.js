import React from 'react';
import { useParams } from "react-router-dom";
import { getProduct } from "../utils/data";
import Header from '../components/Header';
import {Button} from '../components/styles/Button.styled'
import { Container, Flex } from '../components/styles/Helper';

function Detail() {
    let params = useParams();
    let product = getProduct(parseInt(params.id,10))
    return (
        <>
            <Header/>
            
            <Container>
                <Flex>
                    <img alt="" src={`/images/${product.image}`}></img>
                    <div>
                        <Button>
                        Buy button 
                        </Button>
                        {product.askprice}
                     
                        <Button>
                        Sell button
                        </Button>
                        {product.bidprice}
                    </div>
                </Flex>
                <p>{product.name}</p>
            </Container>
        </>
    )
}

export default Detail;
