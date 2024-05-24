// src/contexts/CartContext.tsx
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    // Function to fetch initial cart count from API
    const fetchCartCount = async () => {
      try {
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await fetch('https://coffee-shop-r4a2.onrender.com/cart/64b96d78e026ef1234d4c59f');
        const data = await response.json();
        // Assuming API returns the count directly
        setCartCount(data.length); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching cart count:', error);
      }
    };
    // Call the function to fetch data on component mount
    fetchCartCount();
  }, []);

  const handleAddToCart = async (url, body) => {
    try {
      // Make the API call to add item to cart
      const response = await axios.post(url, body);
      // Assuming API returns updated cart data with length
      setCartCount((prevCount) => prevCount + 1); // Update cart count based on response
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error if needed
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, handleAddToCart, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
