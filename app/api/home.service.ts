import api from "~/api/axios-instance";

export const getProfile = async (section: string) => {
  try {
    const response = await api.get(`/data/${section}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching work experience: ${error}`);
    throw error;
  }
};
