import React from 'react'
import styled from "styled-components"

export default function Footer() {
    return (
        <FooterWrapper className="navbar navbar-expand-sm navbar-light justify-content-center px-sm-5 py-3">
            <ul className="navbar-nav mx-auto align-items-center justify-content-around">
                <li className="nav-item mx-2"><a href="#">Shipping</a></li>
                <li className="nav-item mx-2"><a href="#">Returns</a></li>
                <li className="nav-item mx-2"><a href="#">Size Guide</a></li>
                <li className="nav-item mx-2"><a href="#">Legals</a></li>
                <li className="nav-item mx-2"><a href="#">Contact</a></li>
            </ul>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`

a{
    text-transform: uppercase;
    color: gray !important;
    font-size: 12px;
}
`