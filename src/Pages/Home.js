import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import Button from '../components/Button';
import { Container, Flex, Grid } from '../components/styles/helper'
export default function Home() {
    return (
        <>  
            <Header/>
            <Container>
                <Flex>
                    <div>
                    <h4>
                        Buy & Sell Gift Cards, Street Wears, Sneakers, Collectibles
                    </h4>
                    <Button/>
                    </div>
                    <div>
                        Video about Trada.
                    </div>
                </Flex>
                <Grid>
                    <Product/>  
                </Grid>
            </Container>
        </>
    )
}
