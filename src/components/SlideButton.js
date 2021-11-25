import React, { Component } from 'react';
import Button from './styles/Button.styled';
import {Flex} from './styles/Helper';

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
