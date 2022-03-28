import { ReactNode } from "react";
import Flex from "../Flex";

interface CatalogProps {
  children: ReactNode;
}
const Catalog = ({ children }: CatalogProps) => (
  <Flex direction="column">{children}</Flex>
);

export default Catalog;
