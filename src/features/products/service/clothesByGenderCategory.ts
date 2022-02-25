import { IClothesCategory } from 'src/interfaces';
export const filteredProductsByCategory = (payload: IClothesCategory[]) => {
  const loadedData = [];
  for (const key in payload) {
    loadedData.push({
      id: key,
      title: payload[key]?.title as string,
      price: payload[key]?.price as number,
      category: payload[key]?.category as string,
      description: payload[key]?.description as string,
      image: payload[key]?.image as string,
    });
  }
  const filteredClothesArray = loadedData.filter((item) => {
    return ["men's clothing", "women's clothing"].includes(item.category);
  });
  return filteredClothesArray;
};
