import * as actionTypes from './shop-types'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "the Uccellino",
            description: "100% merino wool",
            image: "./charl.jpg",
            price: 10.00,
        },
        {
            id: 2,
            title: "the Charl",
            description: "100% shetland wool",
            image: "./uccellino.jpg",
            // "image": require("./uccellino.jpg"),
            price: 12.00

        }
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_ITEM_QUANTITY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state;
    }
};



export default shopReducer;