import Flex from "../Flex";
import Avatar from "../Avatar";
import { ReactNode, useMemo } from "react";
import { styled } from "../../stitches.config";

interface CatalogItemProps {
  name: Catalog.ProductName;
  price?: string;
  amount?: string;
  children?: ReactNode;
}

const ItemTitle = styled("span", {
  fontFamily: "$system",
  fontSize: "16px",
  color: "$blackA12",
  paddingBottom: "$2",
});

const Price = styled("span", {
  fontSize: "16px",
  fontWeight: 700,
  color: "$blackA12",
});

const Amount = styled("span", {
  fontSize: "16px",
  color: "$gray10",
});

const CatalogItem = ({
  name,
  price = "1.40 €",
  amount = "500 ml",
  children,
}: CatalogItemProps) => {
  const fallbackText = useMemo(() => {
    // @FIXME optimize algo
    const words = name.replace(/[^a-z ]/i, "").split(" ");

    const [firstWord, secondWord] = words;
    if (secondWord) {
      return `${firstWord[0]}${secondWord[0]}`.toUpperCase();
    }
    return `${firstWord.slice(0, 2)}`.toUpperCase();
  }, [name]);

  return (
    <Flex
      css={{
        margin: "$1",
        padding: "$1",
      }}
      gap={1}
    >
      <Avatar fallbackText={fallbackText} />
      <Flex
        grow={1}
        gap={1}
        css={{
          paddingBottom: "$3",
          boxShadow: "0 1px 1px -1px $colors$gray8",
        }}
      >
        <Flex grow={1} direction="column">
          <ItemTitle>{name}</ItemTitle>
          <Flex gap={1}>
            <Price>{price}</Price>
            <Amount>({amount})</Amount>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default CatalogItem;
