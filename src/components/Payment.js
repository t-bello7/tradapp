import React from 'react'
import SlideButton from './components/styles/SlideButton';
import {Flex} from './styles/helper';
export default function Payment() {
    return (
        <div>
            <SlideButton/>
            
            <Flex>
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
        </div>
    )
}
