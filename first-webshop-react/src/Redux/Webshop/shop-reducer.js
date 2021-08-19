import * as actionTypes from './shop-types'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "the Uccellino",
            description: "100% merino wool",
            image: './uccellino.jpg',
            alt: 'knitted eggwarmer',
            price: 10.00,
        },
        {
            id: 2,
            title: "the Charl",
            description: "100% shetland wool",
            image: './charl.jpg', 
            alt: 'knitted eggwarmer',
            price: 12.00,

        }
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const cartItem = state.products.find(item => item.id === action.payload.id)
            const inCart = state.cart.find((cartItem) => cartItem.id === action.payload.id ? true : false); //checks if in cart already
           
            return {
                ...state,    //spreading data to not lose products
                cart: inCart ? state.cart.map((cartItem) =>  //if in cart map thru to finf id
                cartItem.id === action.payload.id 
                ? {...cartItem, qty: cartItem.qty + 1}   //qty is whatever it is plus 1
                : cartItem)
                : [...state.cart, { ...cartItem, qty: 1}] //else add 1
            }


        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id!== action.payload.id)
            }  //filter all cart items delete one want to remove


        case actionTypes.ADJUST_ITEM_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((cartItem) =>  //want specific item
                cartItem.id === action.payload.id      //compare id
                ? {...cartItem, qty: +action.payload.qty}  //if find spread again and adjust qty value
                : cartItem)   //else return item
            }    //+ removes 0 before number


        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,                              //sets current item  changes from null
                currentItem: action.payload,  
            }

            
        default:
            return state;
    }
};



export default shopReducer;