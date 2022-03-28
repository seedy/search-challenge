import type { AppProps } from "next/app";
import CartContextProvider from "../components/context/Cart";
import SearchSWRConfig from "../components/context/SWRConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchSWRConfig>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </SearchSWRConfig>
  );
}

export default MyApp;
