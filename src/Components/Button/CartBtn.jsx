import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-primary ms-2">
                <span className="fa fa-shopping-cart text-white me-1"></span>
            </NavLink>
        </>
    )
}

export default CartBtn
