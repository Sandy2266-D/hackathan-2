import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import{ButtonContainer} from "./Button";
import styled from "styled-components";

export default class Navbar extends Component
{
    render()
    {
        return(
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm">
{/* <Link to="/">
<img src={logo} alt ="store className="navbar-brand>
<Link> */}
<ul className="navbar-nav aligh-items-center">
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
PRODUCTS
</Link>
</li>
</ul>
<Link to='/cart' classname="ml-auto">
<ButtonContainer>
<span classname="mr-2"></span><i class="fa fa-cart-plus" aria-hidden="true"></i>
my cart
</ButtonContainer>
</Link>
</NavWrapper>
)
    }
}
const NavWrapper=styled.nav
`
background:var(--main Blue);
.nav-link
{
colr:var(--mainWhite)!important;
font-size-size:1.3rem;
//1 rem=20px;
text-transafor:capitalize !important; 
}
`;