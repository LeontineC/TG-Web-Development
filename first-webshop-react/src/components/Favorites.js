import React from 'react'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../Redux/Webshop/shop-actions'

const Favorites = () => {
 const[favorite, setFavorite] = useState()
     
     
    return (
        <div>
           
        </div>
    )
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addToFavorites: (itemID) => dispatch(addToFavorites(itemID)),
        removeFromFavorites: (itemID) => dispatch(removeFromFavorites(itemID))
    }
}

export default connect(null, mapDispatchToProps)(Favorites)


