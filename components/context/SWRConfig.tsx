import { ReactNode } from "react";
import { SWRConfig, SWRConfiguration } from "swr";
import fetcher from "../../utils/fetcher";

const SEARCH_SWR_CONFIG = {
  fetcher,
};

interface SearchSWRConfigProps extends SWRConfiguration {
  children: ReactNode;
}
const SearchSWRConfig = (props: SearchSWRConfigProps) => (
  <SWRConfig value={SEARCH_SWR_CONFIG} {...props} />
);

export default SearchSWRConfig;
