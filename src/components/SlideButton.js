import React, { Component } from 'react';
import Button from './Button';
import {Flex} from './styles/helper';

export default class SlideButton extends Component {
    render() {
        return (
            <Flex>
                <Button/>
                <Button/>
            </Flex>
        )
    }
}
