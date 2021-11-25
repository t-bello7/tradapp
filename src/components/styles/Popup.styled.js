import styled from 'styled-components';

export const PopupStyle = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
`;

export const InnerStyle = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #fff;
    color: #000;
`;