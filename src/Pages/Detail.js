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
        <div>
            <Header/>
            
            <Container>
                <Flex>
                    <div>
                        image
                    </div>
                    <div>

                        <Button>
                        Buy button 
                        </Button>
                        # show lowest ask price
                     
                        <Button>
                        Sell button 
                        </Button>
                        #show highest bid price
                  
                    </div>

                  
                </Flex>
                <p>{product.name}</p>
            </Container>
        </div>
    )
}

export default Detail;
