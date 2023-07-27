import axios from "axios";
import { UserBody } from "../types/main";

const myApi = axios.create({
  baseURL: "https://tradenow-authentication-production.up.railway.app/",
});

export const postUser = async (userData: UserBody) => {
  const response = await myApi.post("/register", userData);
  return response;
};
