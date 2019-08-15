import React, { Component } from "react"
import { ProductConsumer } from "../context"
import { Link } from "react-router-dom"
import { ButtonContainer } from "./Button"

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">


                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize d-flex justify-content-center align-items-center">
                                    <img style={{ height: "80vh", width: "auto" }} src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text*/}
                                <div style={{ borderLeft: "0.5px solid gray" }} className="col-10 mx-auto col-md-6 px-4 py-3 ">
                                    <h1 style={{ fontWeight: "bold", fontSize: "2rem", textTransform: "uppercase" }}>{title}</h1>
                                    <h4 className=" mt-3 mb-2 ">
                                        Designer: <span className="text-uppercase ">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-muted">
                                        ${price}
                                    </h4>

                                    <p className="text-uppercase font-weight-bold mt-3 mb-0">
                                        Details:
                                    </p>
                                    <p className="text-muted ">
                                        {info}
                                    </p>
                                    {/*Buttons */}
                                    <div>
                                        <Link to="/all"><ButtonContainer> back to products
                                            </ButtonContainer></Link>

                                        < ButtonContainer cart disabled={inCart} onClick={() => {
                                            value.addToCart(id); value.openModal(id);
                                        }}>  {inCart ? "in Cart" : "add to cart"} </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
//2:50