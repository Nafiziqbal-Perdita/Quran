export const fetchSurahs = async () => {
  const endPoint = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/index.json`;

  try {
    const response = await fetch(endPoint);

    if (!response.ok) {
      throw new Error('Could Not fetch the Data');
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    throw error;
  }
}

export const fetchSurah = async ({id}) => {
  const endPoint = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${id}.json`;

  try {
    const response = await fetch(endPoint);

    if (!response.ok) {
      throw new Error('Could Not fetch the Data');
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    throw error;
  }
}