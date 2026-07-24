import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/content";

export const getBlocks = async (pageId) => {
  const response = await axios.get(`${API_URL}/page/${pageId}`);
  return response.data.data;
};
