import React from 'react'
import './ProductDetail.css'

import { connect } from 'react-redux'
import { addToCart } from '../../Redux/Webshop/shop-actions'

const ProductDetail = ({ detail, addToCart }) => {

    
    return (
        <>
           <p>{detail.title}</p>
           <button onClick = {() => addToCart(detail.id)}>add to basket</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        detail: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
