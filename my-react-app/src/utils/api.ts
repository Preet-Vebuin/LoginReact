import axios from "axios";
import { API_BASE_URL } from "./constant";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    console.log(response.data)
    return response.data; 
  } catch (error : any) {
    console.log(error.response?.data?.message,error.response?.data)
    throw error.response?.data?.message  || "Login failed";
  }
};
