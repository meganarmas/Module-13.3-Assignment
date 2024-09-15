import React, { useReducer, useState } from "react";
import { ShoppingCartReducer }from "../Reducers/ShoppingCart";
import { ShoppingCartItem } from "../Context/ShoppingCartContext";

const ShoppingCart: React.FC = () => {
    const [cart, dispatch] = useReducer(ShoppingCartReducer, []);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0)

    const addItem = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem: ShoppingCartItem = { id: Date.now(), name: itemName, price: itemPrice };
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setItemName('');
        setItemPrice(0);
    };

    const handleRemoveItem = (itemId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const calculateTotalCost = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    return(
        <div>
            <h2>Shopping Cart</h2>
            <div>
                <input 
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Item Name"
                />
                <input 
                type="text"
                value={itemPrice}
                onChange={(e) => setItemPrice(Number(e.target.value))}
                placeholder="Item Price"
                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name}: ${item.price.toFixed(2)}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total Cost: ${calculateTotalCost().toFixed(2)}</h3>
        </div>
    );
};

export default ShoppingCart;