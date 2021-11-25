import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
`
export const Flex = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    height: 100%;

    /* @media only screen and (max-width: ${({theme})=> theme.mobile}){
        flex-direction:-column;
    } */
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media only screen and (max-width: ${({theme})=> theme.mobile}){
        grid-template-columns: 1fr;
    }
`