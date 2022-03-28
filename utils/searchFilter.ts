const searchFilter = (items: Catalog.ProductName[], search: string) => {
  if (search === "") {
    return items;
  }
  const words = search.split(" ");
  const wordCount = words.length;
  const regexes = words.map(word => new RegExp(word
    .replace(/a/g, '[aà]')
    .replace(/e/g, '[eéèê]')
    .replace(/i/g, '[iî]')
    .replace(/o/g, '[oô]')
    .replace(/u/g, '[uû]'),
    'i'
    ));
  return items
  .reduce((filtered: {matches: number, item: string}[], item) => {
    const matches = regexes.reduce((count, regex) => {
      return (regex.test(item)) ? count + 1 : count
    }, 0);
    if (matches < wordCount) {
      return filtered;
    }
    return [...filtered, {matches, item}];
  }, [])
  .sort(({matches: aMatches}, {matches: bMatches}) => bMatches - aMatches)
  .map(({item}) => item)
}

export default searchFilter