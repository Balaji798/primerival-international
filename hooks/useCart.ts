/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { Cart, CartItem, Product } from '@/types';

const CART_STORAGE_KEY = 'Prime International-cart';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], subtotal: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = prevCart.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return calculateTotals({ ...prevCart, items: updatedItems });
      } else {
        const newItem: CartItem = { ...product, quantity };
        const updatedItems = [...prevCart.items, newItem];
        return calculateTotals({ ...prevCart, items: updatedItems });
      }
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item =>
        Number(item.id) === productId ? { ...item, quantity } : item
      );
      return calculateTotals({ ...prevCart, items: updatedItems });
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => Number(item.id) !== productId);
      return calculateTotals({ ...prevCart, items: updatedItems });
    });
  };

  const clearCart = () => {
    setCart({ items: [], subtotal: 0, total: 0 });
  };

  const calculateTotals = (cart: Cart): Cart => {
    const subtotal = cart.items.reduce((sum, item) => sum + (item?.price || 0) * item.quantity, 0);
    const total = subtotal; // Add tax/shipping here if needed
    return { ...cart, subtotal, total };
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    isLoading
  };
}