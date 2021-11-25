import styled from 'styled-components';

export const NavBar = {
    Wrapper: styled.nav`
        flex: 1;
        align-self: flex-start;
        padding: 1rem 3rem;
        /* display: flex;gu */
        justify-content: space-between;
        align-items: center;
        background-color:#141920;
        color: #fff;
        /* width: 100%; */
    `,
    Logo: styled.h1`
        padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
        display: flex;
        list-style:none;
    `,
    Item: styled.li`
        cursor: pointer;
        padding: 0 1rem;
    `
    
}

export const MobileNavBar = {
    Wrapper: styled(NavBar.Wrapper)`
        position: fixed;
        width: 100%;
        bottom: 0;
        justify-content: center;
    `,
    Items: styled(NavBar.Items)`
        flex: 1;
        padding: 0 2rem;
        justify-content: space-around;
    `,
    Item: styled(NavBar.Item)`
        display: flex;
        flex-direction:column;
        align-items:center;
        font-size: 1.2rem;
    `,
    Icon: styled.span``,
}