import qs from "querystring";
import httpClient from "../../hooks/httpClient";

export const login = (user) => httpClient.post("/login", user);
export const getUserEmailByUsername = (user) =>
  httpClient.get("/usuario/getUserEmailByUsername", {
    params: {
      user,
    },
  });

export const sendResetEmail = (email) =>
  httpClient.post("/login/forgotten_password", email);

export const getById = (id) => httpClient.get(`/usuario/${id}`);
