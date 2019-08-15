import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        return (
            <div style={{ height: " 100vh" }} className="container mt-5">
                <div className="row">
                    <div style={{ fontSize: "1.2rem" }} className="col-10 mx-auto text-center text-uppercase font-weight-bold ">
                        your cart is currently empty
                    </div>
                </div>
            </div>
        )
    }
}
