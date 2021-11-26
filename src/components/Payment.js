import React from 'react'
import {Flex} from './styles/Helper';


export default function Payment(props) {
    return (
        <Flex>
            <img src={props.image} alt =""/>  
            <div>
                <h2> Processing Fee</h2>
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
    )
}
