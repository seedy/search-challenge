import "../styles/globals.css";
import type { AppProps } from "next/app";
import SearchSWRConfig from "../components/context/SWRConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchSWRConfig>
      <Component {...pageProps} />
    </SearchSWRConfig>
  );
}

export default MyApp;
