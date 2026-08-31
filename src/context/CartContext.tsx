import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { CartItem, Product, GoodiesProduct } from '../types';
import { useToast } from './ToastContext';
import confetti from 'canvas-confetti';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    personalisation?: CartItem['personalisation'],
    customGlazes?: string[],
    boxItems?: GoodiesProduct[]
  ) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  dietaryWarnings: string[];
  submitInquiryOrder: (customerDetails: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
    eventDate?: string;
  }) => Promise<{ success: boolean; orderId: string }>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { addToast } = useToast();
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('elamel_treat_box');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('elamel_treat_box', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (
    product: Product,
    quantity = 1,
    personalisation?: CartItem['personalisation'],
    customGlazes?: string[],
    boxItems?: GoodiesProduct[]
  ) => {
    const itemKey = personalisation
      ? `${product.id}-${personalisation.familyOrName}-${personalisation.occasion}`
      : boxItems
      ? `${product.id}-box-${Date.now()}`
      : product.id;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: itemKey,
            product,
            quantity,
            personalisation,
            customGlazes,
            boxItems,
          },
        ];
      }
    });

    addToast(
      'Added to Treat Box!',
      `"${product.name}" has been added to your family selection.`,
      'success'
    );
  };

  const removeFromCart = (id: string) => {
    const item = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      addToast(
        'Item Removed',
        `"${item.product.name}" was removed from your treat box.`,
        'info'
      );
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const totalItemsCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [items]);

  // Aggregate all dietary allergen warnings
  const dietaryWarnings = useMemo(() => {
    const warnings = new Set<string>();
    items.forEach((item) => {
      if (item.product.category === 'goodies') {
        const gp = item.product as GoodiesProduct;
        if (gp.allergenWarning) {
          warnings.add(`${gp.name}: ${gp.allergenWarning}`);
        }
      }
      if (item.boxItems) {
        item.boxItems.forEach((b) => {
          if (b.allergenWarning) {
            warnings.add(`${b.name}: ${b.allergenWarning}`);
          }
        });
      }
    });
    return Array.from(warnings);
  }, [items]);

  const submitInquiryOrder = async (customerDetails: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
    eventDate?: string;
  }): Promise<{ success: boolean; orderId: string }> => {
    // Generate gentle random order code
    const orderId = `ELAMEL-${Math.floor(100000 + Math.random() * 900000)}`;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e1285b', '#f8971d', '#0284c7', '#10b981', '#8b5cf6'],
      });
    } catch {
      // ignore
    }

    addToast(
      'Pre-order Request Received!',
      `Thank you, ${customerDetails.name}! Your family request (${orderId}) is now safely in our bakery & pottery queue.`,
      'success'
    );

    clearCart();
    return { success: true, orderId };
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        totalItemsCount,
        subtotal,
        dietaryWarnings,
        submitInquiryOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
