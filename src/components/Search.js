import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';
import Product from "./Product"
import Title from "./Title"

export default class Search extends Component {
    state = {
        key: "",
        results: []
    }
    handleChange = (e) => {
        this.setState({ key: e.target.value })
    }
    search = (data) => {
        //data.products.forEach(product => { console.log(product.title) })
        //data.products.forEach(product => { console.log(product.title.includes(this.state.key)) })
        const newdata = data.products.filter(product => product.title.toLowerCase().includes(this.state.key.toLowerCase()));
        this.setState({ results: newdata })
        //data.products.forEach(product => { product.forEach(el => console.log(el)) })
        //display data
    }

    render() {

        return (

            <ProductConsumer>

                {(value) =>
                    <div className="container">
                        <Title title="search"></Title>
                        <form className=" container col-8 mx-auto my-5" action="">
                            <input className="col-10 " type="text" onChange={this.handleChange} />
                            <button className="col-1" onClick={(e) => {
                                e.preventDefault();
                                this.search(value);
                            }}> <i className="fas fa-search"></i></button>
                        </form>
                        {/* display number of results */}
                        <div className="py-5">
                            <div style={{ height: " 80vh" }} className="container">

                                <h5>{this.state.results.length} results</h5>
                                <div className="row">
                                    {(this.state.results.map(product => {
                                        return (
                                            < Product key={product.id} product={product} />
                                        )
                                    })
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>}

            </ProductConsumer>

        )
    }
}
