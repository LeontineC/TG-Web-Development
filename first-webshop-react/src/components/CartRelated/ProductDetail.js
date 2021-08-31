import React from 'react'
import './ProductDetail.css'

import { connect } from 'react-redux'

import { addToCart } from '../../Redux/Webshop/shop-actions'
const ProductDetail = ({ detail, addToCart }) => {

    
    return (
        <>
            <div className='pDContainer'>
                {/* <h3 className='detailTitle'>{detail.title}</h3> */}
                <img src={detail.imageTwo} width='200px' height='200px'className='imgPD'/>
                {/* <p>{detail.description}</p> */}
                {/* <p>&euro; {detail.price}</p> */}
            </div>
           <button onClick = {() => addToCart(detail.id)} className='buttonPD'>add to basket</button>
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
