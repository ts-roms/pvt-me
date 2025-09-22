import api from "~/api/axios-instance";

export const getProfile = async () => {
  try {
    const response = await api.get(`/data/home/default.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching work experience: ${error}`);
    throw error;
  }
};
