import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './store/shopping-cart-context';

export default function ShoppingCart() {
    return (
        <div>
            <CartProvider>
                <ProductList />
                <Cart />
            </CartProvider>
        </div>
    );
}