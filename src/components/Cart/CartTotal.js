import React from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from "./PayPalButton"
import { ButtonContainer } from '../Button';

export default function CartTotal({ value, history }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row" >
                    <div style={{ borderTop: "1px solid gray" }} className="col-3 py-4 col-sm-6 mx-auto text-capitalize">
                        <h5 style={{ fontSize: "0.9rem" }} className="d-flex text-uppercase justify-content-between" >
                            <span className=" text-left text-muted">subtotal: </span>
                            <strong>${cartSubtotal}</strong>
                        </h5>
                        <h5 style={{ fontSize: "0.9rem" }} className="d-flex text-uppercase justify-content-between" >
                            <span className=" text-left text-muted">tax: </span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5 style={{ fontSize: "0.9rem" }} className="d-flex text-uppercase justify-content-between" >
                            <span className=" text-left text-muted">total: </span>
                            <strong>${cartTotal}</strong>
                        </h5>
                        <div className="d-flex mt-2 justify-content-between align-items-center" >
                            <Link to='/'>
                                <ButtonContainer className="mb-3 px-5" onClick={() => clearCart()}>
                                    Clear Cart
                            </ButtonContainer>
                            </Link>
                            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                        </div>
                    </div>
                </div >
            </div >
        </React.Fragment >

    )
}
