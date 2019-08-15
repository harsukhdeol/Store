import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

export default class Home extends Component {
    render() {
        return (
            <div className=" m-0 p-0 container">
                {/* <h1>fashun pashun</h1> */}
                <Pane className="row">
                    <Link to="/all">
                        <h1>Collection</h1>
                        <div className=" col"><div className="img-container"><img src="img/home/1.png" alt="" /></div></div>
                    </Link>
                </Pane>
                <Pane className="row">
                    <Link to="/top">
                        <h1 style={{
                            right: "0",
                            margin: "300px 10vw 6px"
                        }}>Tops</h1>
                        <div className=" col col-5"><div className="img-container"><img src="img/home/2.jpg" alt="" /></div></div>
                        <div className=" col col-7 bg-color-primary"><div className="img-container"><img src="img/home/3.jpg" alt="" /></div></div>
                    </Link>
                </Pane>
                <Pane className="row">
                    <Link to="/bottom">
                        <h1>Bottoms</h1>
                        <div className="col"><div className="img-container align-content-end" ><img src="img/home/4.png" alt="" /></div></div>
                    </Link>
                </Pane>
                <Pane className="row">
                    <Link to="/accessories">
                        <h1>Accessories</h1>
                        <div className=" col col-8"><div className="img-container"><img src="img/home/6.png" alt="" /></div></div>
                        <div className=" col col-4"><div className="img-container"><img src="img/home/5.png" alt="" /></div></div>
                    </Link>
                </Pane>

            </div>
        )
    }
}
const Pane = styled.div`
width: 100vw;
height: 700px;
overflow:hidden;
h1{
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 2.5rem;
    margin: 300px 0 12px 10vw ;
    border-bottom: 5px solid white;
    display: inline-block;
    z-index: 1000;
    position: absolute;
}
.col{
    padding: 0;
    height: 700px;
    width: 100vw;
    display: inline-block;
    overflow: hidden;
}

.img-container{
   display: flex;
   justify-content:center;
   align-items:center;
}
img{
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  
}
`