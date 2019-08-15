import React, { Component } from "react"
import Product from "../Product"
import Title from "../Title"
import { ProductConsumer } from "../../context"
export default class ProductList extends Component {

    render() {
        const styles = {
            display: "grid",
            flex: 1

        }
        function myFunction(x) {
            if (x.matches) { // If media query matches
                styles.gridTemplateColumns = "repeat(3, 33vw)";
            } else {
                styles.gridTemplateColumns = "repeat(2, 50vw)";
            }
        }

        var x = window.matchMedia("(min-width: 768px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes */

        return (
            <React.Fragment>
                <div className="py-5">
                    <div >
                        <Title title="tops" />
                        <div className="mx-auto" style={styles}>
                            <ProductConsumer>
                                {(value) => {

                                    return value.products.map(product => {
                                        if (product.type === "top") {
                                            return (
                                                < Product key={product.id} product={product} />
                                            )
                                        }
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>


        )
    }

}
