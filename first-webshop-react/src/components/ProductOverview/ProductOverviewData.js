import React from 'react'
import ProductOverview from './ProductOverview'

import { connect } from 'react-redux'

const ProductOverviewData = ({products}) => {

   
    return (
        <div>
            
            {products.map((prods) => 
            <ProductOverview  prods={prods}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
         products: state.shop.products,
     }
}

export default connect(mapStateToProps)(ProductOverviewData)
