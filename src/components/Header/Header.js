import React from 'react';
import communityPic from '../../assets/communityPic.jpg'
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const Header = () =>{
    return(
        <>
            <img src={communityPic} className='BannerImage' alt='' />
            <Navbar color="dark" sticky="top">
                <Nav>
                    <NavbarBrand href="/">BBB Home</NavbarBrand>
                    <NavItem>
                        <NavLink href="/users">Users</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jobs">Jobs</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    );
}
export default Header;