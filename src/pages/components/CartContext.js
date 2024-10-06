import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    // const addToCart = (product) => {
    //     setCartItems(prevItems => [...prevItems, product]);
    // }

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        })
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}