import React, { createContext, useState } from "react";
import all_product from '../Components/Assetes/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart

}
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItem)
    }
    const removeFormCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const ContextValue = { all_product, cartItem, addToCart, removeFormCart }

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider