import React, { useEffect, useState} from 'react'
import { Link } from'react-router-dom';
import { NavBar,MobileNavBar } from './styles/Header.styled';
import { Container } from './styles/helper';
import SearchBar from './SearchBar';
import { FiHome } from 'react-icons/fi';

export default function Header() {
    const [windowDimension, setWindowDimension] = useState(null);
    useEffect(()=>{
        setWindowDimension(window.innerWidth);
    },[]);
  
    useEffect(()=>{
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }
  
    window.addEventListener("resize", handleResize);
        return ()=> window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension <= 640;

    return (
        <Container>
            { !isMobile ? (
            <NavBar.Wrapper>
            <NavBar.Logo> Logo </NavBar.Logo>
            <NavBar.Items>
                <NavBar.Item><Link to={'/'}>Home</Link></NavBar.Item>
            </NavBar.Items>
            </NavBar.Wrapper>) : (
            <MobileNavBar.Wrapper>
                {/* <MobileNavBar.Logo> Logo </MobileNavBar.Logo> */}
                <MobileNavBar.Items>
                    <MobileNavBar.Item> 
                        <MobileNavBar.Icon>
                            <FiHome size={16}/>
                        </MobileNavBar.Icon>
                        Home  
                    </MobileNavBar.Item>
                </MobileNavBar.Items>
                <SearchBar/>
            </MobileNavBar.Wrapper>
            )}        
        </Container>
        )
}
