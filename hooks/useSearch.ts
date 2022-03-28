import { useRouter } from "next/router";
import { useMemo } from "react";

const useSearch = () => {
  const { query } = useRouter();
  const search = useMemo(() => query?.["search"] as string || "", [query]);
  
  return search;
}

export default useSearch;