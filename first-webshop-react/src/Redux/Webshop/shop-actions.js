import * as actionTypes from './shop-types'

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        },
    }
};

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        },
    }
};

export const adjustItemQuantity = (itemID, qty) => {
    return {
        type: actionTypes.ADJUST_ITEM_QUANTITY,
        payload: {
            id: itemID,
            qty,
        },
    }
};

export const loadCurrentItem = (item) => {   //item with all its data
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
};
