import React from 'react';
import {Flex} from './styles/Helper';
import {PopupStyle, InnerStyle} from './styles/Popup.styled';

export default function Popup(props) {
    return (props.trigger) ? (
        <PopupStyle>
            <Flex>
                <InnerStyle>
                    <button onClick={()=> props.setTrigger(false)}> close </button>
                { props.children }
                </InnerStyle>
            </Flex>
        </PopupStyle>
        ): "";
}
