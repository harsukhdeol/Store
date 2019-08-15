import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    background: transparent;
    border: 1px solid black;
    border-color: ${props => props.cart ? "gray" : "black"};
    color: ${props => props.cart ? "gray" : "black"};
    border-radius: 26px;

    padding: 1rem 1.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background:  ${props => props.cart ? "gray" : "black"};
        color: white;
    }
    &:focus{
        outline: none;
    }
    `
