import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import { connect } from 'react-redux'


const Navbar = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0
        cart.forEach((cartItem) => {  //loops thru cart array
            count += cartItem.qty
        })
        setCartCount(count)
    }, [cart, cartCount]);

    return (
        <nav className='navbar'>
            <h1>The Naked Egg</h1>

            <Link to='/' className='navLinks'>Home</Link>
            <Link to='/ourstory' className='navLinks'>Our Story</Link>
            <Link to='/productoverview' className='navLinks'>Our Products</Link>
            <Link to='/cart' className='navLinks'>Basket<i className="ri-shopping-basket-line"></i></Link>
            <div className='cartCounter'>{cartCount}</div>
            <Link to='/login'><i className="ri-login-circle-line">Login</i></Link>

        </nav>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar)