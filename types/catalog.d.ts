type Catalog = {
  data: {
    allProductReference: Catalog.Product[]
  }
}

declare namespace Catalog {
  type ProductName = string;
  type Product = {
    display_name:  ProductName
  };

}

