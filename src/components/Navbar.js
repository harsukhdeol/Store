import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../logo.png"
import styled from 'styled-components'
import { ButtonContainer } from "./Button"

export default class Navbar extends Component {
    burgerToggle = () => {
        let linksEl = document.querySelector('.narrowLinks');
        let icon = document.querySelector(".icon");
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
            icon.classList.add("fa-bars", "fa-2x");
            icon.classList.remove("fa-times");
        } else {
            linksEl.style.display = 'block';
            icon.classList.add("fa-times")
            icon.classList.remove("fa-bars", "fa-2x")
        }
    };


    render() {
        return (

            <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5 ">

                <Link to="/">
                    {/* //  <img src={logo} alt="store" className="navbar-brand" /> */}
                    <h1>IN.FER.NO</h1>
                </Link>
                <ul className="navbar-nav align-items-center justify-content-around navWide">
                    <li className="nav-item mx-1">
                        <Link to="/new" className="nav-link">New</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/all" className="nav-link">All</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/top" className="nav-link">Tops</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/bottom" className="nav-link">Bottoms</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/outerwear" className="nav-link">Outerwear</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/dress" className="nav-link">Dresses</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/accessories" className="nav-link">Accessories</Link>
                    </li>

                    <li className="nav-item mx-1">
                        <Link to="/search" className="nav-link"><i className="fas fa-search"></i></Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/cart" className="nav-link">My Cart</Link>
                    </li>
                </ul>
                <div className="navNarrow">
                    <span className="mx-2">
                        <Link to="/search" className="nav-link"><i className="fas fa-search"></i></Link>
                    </span>
                    <span className=" mx-2">
                        <Link to="/cart" className="nav-link">My Cart</Link>
                    </span>
                    <i style={{ transition: " all 0.3s ease-in-out" }} className="icon fa fa-bars fa-2x" onClick={this.burgerToggle} ></i>
                    <div className="narrowLinks">
                        <li onClick={this.burgerToggle}>
                            <Link to="/new" className="link">New</Link>
                        </li>
                        <li onClick={this.burgerToggle}>
                            <Link to="/all" className="link">All</Link>
                        </li>
                        <li onClick={this.burgerToggle}>
                            <Link to="/top" className="link">Tops</Link>
                        </li>
                        <li onClick={this.burgerToggle}>
                            <Link to="/bottom" className="link">Bottoms</Link>
                        </li>
                        <li onClick={this.burgerToggle}>
                            <Link to="/outerwear" className="link">Outerwear</Link>
                        </li>
                        <li onClick={this.burgerToggle}>
                            <Link to="/dress" className="link">Dresses</Link>
                        </li>
                        <li onClick={this.burgerToggle}>
                            <Link to="/accessories" className="link">Accessories</Link>
                        </li>
                    </div>
                </div >
            </NavWrapper >

        );
    }
}
const NavWrapper = styled.nav`
background: white;
width: 100vw;
border-bottom: 0.25px solid black;
border-top: 6px solid black;
display: flex;
justify-content: space-around; 
.nav-link{
    text-transform: uppercase;
    color: black !important;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
}
img{
    height: 50px;
    width: auto;
}
h1{
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem 0;
    color: black;
    display: inline;
}
a:hover{
    text-decoration: none;
}

.fa-bars{
        color: black;
    }

.navWide{
    display: none;
}
.navNarrow{
   display: flex;
   justify-content: end;
}
.navNarrow 	i {
    float: right;
    cursor: pointer;
}
.narrowLinks {
    display: none;
}
.navNarrow li {
        text-decoration: none;
        display: block;
        float: right;
        clear: right;
        padding: 0.5em 0;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
    }
		
a{
    color: black;
}

 @media (min-width: 768px) {


		.navWide {
			display: flex;
		}

		.navNarrow {
			display: none;
		}
	
} 
`