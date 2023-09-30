import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignup = async (userData) => {
  try {
    return await axios.post(`${url}/signup`, userData);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
  }
};

export const authenticateLogin = async (userData) => {
  try {
    return await axios.post(`${url}/login`, userData);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
    return error.response;
  }
};
