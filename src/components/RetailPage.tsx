import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { ItemList } from './ItemList';
import { Cart } from './Cart';
import { useCartStore } from '../lib/store';
import { useNavigate } from 'react-router-dom';

export function RetailPage() {
  const [showCart, setShowCart] = React.useState(false);
  const cartItems = useCartStore(state => state.items);
  const { removeItem, updateQuantity, addItem } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setShowCart(false);
    navigate('/checkout', { state: { items: cartItems } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => setShowCart(true)} cartItemCount={cartItems.length} />
      
      <Routes>
        <Route path="/" element={<ItemList category={null} onAddToCart={addItem} />} />
        <Route path="/category/:category" element={<ItemList category={null} onAddToCart={addItem} />} />
      </Routes>

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onRemoveItem={removeItem}
          onUpdateQuantity={updateQuantity}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}