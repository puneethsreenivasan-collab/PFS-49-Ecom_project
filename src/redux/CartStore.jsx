import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
export const CartStore = configureStore(
    {
        reducer: {
            cart: cartSlice 
        }
    }
)