import styled from 'styled-components';


export const ProductStyle = styled.div`
    margin: 30px 0;

   
    @media only screen and (max-width: ${({theme})=> theme.mobile}){
        width: 400px;
    }

`
