import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Items = Record<Catalog.ProductName, number>;

const CartContext = createContext({
  items: {} as Items,
  plusItem: (item: Catalog.ProductName) => {},
  minusItem: (item: Catalog.ProductName) => {},
  updateItem: (item: Catalog.ProductName, nextCount: number) => {},
});

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: ReactNode;
}
const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<Items>({});

  const plusItem = useCallback(
    (item: Catalog.ProductName) => {
      setItems((prevItems) => {
        const prevItemCount = prevItems[item];
        if (prevItemCount) {
          return { ...prevItems, [item]: prevItemCount + 1 };
        }
        return { ...prevItems, [item]: 1 };
      });
    },
    [setItems]
  );

  const minusItem = useCallback(
    (item: Catalog.ProductName) => {
      setItems((prevItems) => {
        const { [item]: prevItemCount, ...prevItemsWithoutItem } = prevItems;
        if (prevItemCount > 1) {
          return { ...prevItemsWithoutItem, [item]: prevItemCount - 1 };
        }
        return prevItemsWithoutItem;
      });
    },
    [setItems]
  );

  const updateItem = useCallback(
    (item: Catalog.ProductName, nextCount: number) => {
      setItems((prevItems) => {
        const { [item]: prevItemCount, ...prevItemsWithoutItem } = prevItems;
        if (nextCount === 0) {
          return prevItemsWithoutItem;
        }
        return { ...prevItemsWithoutItem, [item]: nextCount };
      });
    },
    [setItems]
  );

  const contextValue = useMemo(
    () => ({ items, plusItem, minusItem, updateItem }),
    [items, plusItem, minusItem, updateItem]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
