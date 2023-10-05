import React, { useContext } from 'react';
import CartContext from './store/shopping-cart-context';

function CartItem({ product }) {
    const { removeFromCart } = useContext(CartContext);

    return (
        <li>
            {product.name} - {product.price}원
            <button onClick={() => removeFromCart(product.id)}>장바구니에서 제거</button>
        </li>
    );
}

export default CartItem;