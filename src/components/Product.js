import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (
            <ProductWrapper >
                <div className="item">
                    <ProductConsumer>
                        {(value) => (<div className="img-container" onClick={() => { value.handleDetail(id) }}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-to"></img>
                            </Link>
                            <button className="cart-btn" disabled={inCart} onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }}>
                                {inCart ? <p className=" text-capitalize mb-0" disabled>In Cart</p> : <i className="fas fa-cart-plus" />}
                            </button>
                        </div>)}


                    </ProductConsumer>
                    {/* card footer*/}
                    <div className="/* card-footer d-flex justify-content-between */">
                        <p className=" text-uppercase my-auto">
                            {title}
                        </p>
                        <p className="my-auto">
                            <span className="mr-1">${price}</span>
                        </p>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
const ProductWrapper = styled.div`

img{
    height:80vw;
    width: auto;
    padding: 2vw 0;
}
.item{
    border: 0.01px solid lightgray;
   
    transition: all 0.3s ease-in-out;
    

}
.card-footer{
    background: transparent;
    border-top: 0.25px solid lightgray;
    height: 50px;
    transition: all 0.5s ease-out;
    font-size: 0.8rem;
}

.img-container{
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  
}

.cart-btn{
    position: absolute;
    bottom: 0;
    right:0;
    padding: 0.2rem 0.4rem;
    
    border-radius: 0.5rem 0 0 0 ;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
    color: black;
    border: 1px solid black;
    background:white;

}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    background: black;
    border: none;
    color: var(--mainWhite);
    cursor: pointer;
}
@media (min-width: 768px) {
    img{
        height: 50vw;
    }
}
`;