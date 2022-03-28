import searchFilter from "./searchFilter";

const COCO = 'Huile de coco vierge du Sri Lanka';
const ITEMS = [
  'Assaisonnement - Huile vierge de colza',
  "Huile d'olive vierge extra fruité mûr",
  "Huile d'olive vierge extra fruité vert",
  COCO,
];

describe('searchFilter', () => {
  it('should return all results', () => {
    expect(searchFilter(ITEMS, 'huile')).toEqual(ITEMS);
  })
  it('should return only 1 result', () => {
    expect(searchFilter(ITEMS, 'huile coco')).toEqual([COCO]);
  });
})