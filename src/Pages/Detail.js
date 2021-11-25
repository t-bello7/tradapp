import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import {Button} from '../components/styles/Button.styled'
import { Container, Flex } from '../components/styles/Helper';

function Detail() {
    let params = useParams();
    return (
        <>
            <Header/>
            
            <Container>
                <Flex>
                    {/* <img alt="" src={`/images/${product.image}`}></img>
                    <div>
                        <Button>
                        Buy button 
                        </Button>
                        {product.askprice}
                     
                        <Button>
                        Sell button
                        </Button>
                        {product.bidprice}
                    </div> */}
                </Flex>
                {/* <p>{product.name}</p> */}
            </Container>
        </>
    )
}

export default Detail;
