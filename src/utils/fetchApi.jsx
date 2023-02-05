import axios from "axios";

export const BaseURL = "https://links.papareact.com/";

export const fetchApi = async (url) => {
  const {response} = await axios.get(url);
  return await response.json();
};
