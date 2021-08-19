import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import Basket from './Basket'

import { connect } from 'react-redux'

const Cart = ({ cart }) => {
    const { currentUser } = useContext(AuthContext)

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    
    useEffect(() => {
        let quantity = 0
        let price = 0

        cart.forEach(item => {
            quantity += item.qty;
            price += item.qty * item.price;
        })

        setTotalQuantity(quantity)
        setTotalPrice(price)

    }, [cart, totalPrice, totalQuantity, setTotalPrice, setTotalQuantity])
       
    return (
        <>


            <div>
                {currentUser ? (
                    <p>you are logged in - <Link to='/dashboard'>dashboard</Link></p>
                ) : (
                    <p>
                        <Link to='/login'>log in</Link> or <Link to='/signup'>sign up</Link>
                    </p>
                )}
            </div>
            <div>
                {cart.map((item) =>
                    <Basket key={item.id} item={item} />
                )}
            </div>
            <div className='contentBasket'>
                <h3>the content of your basket</h3>
                <div className='summaryBasket'>
                    <span>{totalQuantity} egg warmers</span>
                    <span> &euro; {totalPrice}</span>
                </div>
                <button>to the checkout</button>
            </div>
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)
