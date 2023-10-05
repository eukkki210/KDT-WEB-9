import React, { useContext } from 'react';
import CartContext, { CartProvider } from './store/shopping-cart-context';

const products = [
    { id: 1, name: '상품 1', price: 100 },
    { id: 2, name: '상품 2', price: 200 },
    { id: 3, name: '상품 3', price: 300 },
];

export default function ProductList() {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>상품 리스트</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}원
                        <button onClick={() => addToCart(product)}>장바구니에 추가</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}