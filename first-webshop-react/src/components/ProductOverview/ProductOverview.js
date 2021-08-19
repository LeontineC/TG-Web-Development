import React from 'react'
import './ProductOverview.css'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../Redux/Webshop/shop-actions'

const ProductOverview = ({ items, addToCart, loadCurrentItem }) => {

    

    return (
        <>

            <div className='itemContainer'>
                <h3>{items.title}</h3>
                <img src={items.image}
                    width='200px'
                    alt={items.alt} />
                <p>{items.description}</p>
                <p>&euro; {items.price}</p>
            </div>

            <div className='addAndViewButtons'>
                <Link to={`/productdetail/${items.id}`}> 
                <button 
                onClick={() => loadCurrentItem(items)}
                className='view'>a closer view</button>
                </Link> 
                <button onClick={() => addToCart(items.id)}className='add'>add to basket</button>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (cartItem) => dispatch(loadCurrentItem(cartItem))
    }
}

export default connect(null, mapDispatchToProps)(ProductOverview)
