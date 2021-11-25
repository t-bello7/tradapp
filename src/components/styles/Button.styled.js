import styled  from "styled-components";

export const Button = styled.button`
    background-color: #5E40D5;
    color: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
    background-color: ${({bg})=> bg || '#fff'};
    color: ${({color})=> color || '#333'};
    
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;