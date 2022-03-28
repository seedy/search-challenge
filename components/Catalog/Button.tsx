import React, { ChangeEvent, useCallback, useMemo } from "react";
import ButtonMinus from "../Button/Minus";
import ButtonPlus from "../Button/Plus";
import { useCartContext } from "../context/Cart";
import Flex from "../Flex";
import Input from "../Input";

interface CatalogButtonProps {
  item: Catalog.ProductName;
}
const CatalogButton = ({ item }: CatalogButtonProps) => {
  const { items, plusItem, minusItem, updateItem } = useCartContext();

  const count = useMemo(() => items?.[item], [items, item]);

  const onPlus = useCallback(() => {
    plusItem(item);
  }, [plusItem, item]);

  const onMinus = useCallback(() => {
    minusItem(item);
  }, [minusItem, item]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateItem(item, Number(e?.target?.value));
    },
    [updateItem, item]
  );

  if (count > 0) {
    return (
      <Flex align="center" gap={1}>
        <ButtonMinus size="small" onClick={onMinus} />
        <Input size="small" type="number" value={count} onChange={onChange} />
        <ButtonPlus size="small" onClick={onPlus} />
      </Flex>
    );
  }
  return (
    <Flex align="center">
      <ButtonPlus onClick={onPlus} />
    </Flex>
  );
};

export default CatalogButton;
