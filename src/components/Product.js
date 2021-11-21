import React from 'react'
import { ProductStyle} from './styles/Product.styled'
import { Flex } from './styles/helper'
export default function Product({img,category,name,}) {
    return (
        <ProductStyle>
            <div >
                {/* <img ></img> */}
            </div>
        <Flex>
            <div>
                <h2> Lowest Ask </h2>
                <p> 300</p>
            </div>
            <div>
                <h2> Sold </h2>
                <p> 300 </p>
            </div>          
            <div>
                <h2> Last Sale </h2>
                <p> 300 </p>
            </div>
        </Flex>
        </ProductStyle>
    )
}
