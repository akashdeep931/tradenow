import axios from "axios";
import { LoginData, UserBody } from "../types/main";

const myApi = axios.create({
  baseURL: "http://localhost:1050/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const postUser = async (userData: UserBody) => {
  const response = await myApi.post("/register", userData);

  return response;
};

export const postLogin = async (loginData: LoginData) => {
  const response = await myApi.post("/login", loginData);

  return response;
};

export const fetchAuth = async () => {
  const response = await myApi.get("/authenticated");

  return response;
};
