import React, { useEffect, useReducer, useContext} from 'react';
import reducer from '../reducers/cart_reducer'

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 3.45,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Add to cart
  const addToCart = (id, amount, product) => { 
    dispatch({ type: ADD_TO_CART, payload: {id, amount, product} })
  }
  
  //Remove from cart
  const removeCartItem = (id) => { 
    dispatch({ type: REMOVE_CART_ITEM, payload: {id} })
  }

  //Toggle cart item amount
  const toggleAmount = (id, value) => { 
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: {id, value} })
  }

  //Clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart])


  return (
    <CartContext.Provider 
      value={{...state, addToCart, toggleAmount, removeCartItem, clearCart}}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => { 
  return useContext(CartContext)
}