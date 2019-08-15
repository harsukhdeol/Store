import React from 'react'
import styled from 'styled-components'
export default function Title({ name, title }) {
    return (
        <div className="d-flex justify-content-between align-items-end">

            <span style={{ fontWeight: "bold", fontSize: "2rem" }} className="text-uppercase mx-5 my-3 ">{title}</span>
            {/* <p className="mx-5">Displaying: # results</p> */}

        </div >
    )
}
