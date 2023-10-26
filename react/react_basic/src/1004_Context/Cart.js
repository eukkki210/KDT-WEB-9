import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from './store/shopping-cart-context';

export default function Cart() {
    const { cart } = useContext(CartContext);

    const total = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </ul>
            <h3>총 가격: {total}원</h3>
        </div>
    );
}