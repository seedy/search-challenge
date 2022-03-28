import "isomorphic-unfetch";

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default fetcher;