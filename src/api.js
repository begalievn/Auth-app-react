import axios from "axios";
const BASE_URL = `https://sheltered-dusk-77313.herokuapp.com/`;

// POST SignUp request
export const onSignUp = async (signupData) => {
  const response = await axios.post(`${BASE_URL}auth/signup`, signupData);
  return response;
};

export const onSignIn = async (signinData) => {
  const response = await axios.post(`${BASE_URL}auth/signin`, signinData);
  return response;
};

export const onGetAllUsers = async (token) => {
  console.log("Gelt all users request");
  const response = axios.get(`${BASE_URL}users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const onGetUser = async () => {
  console.log("Get a user ");
};
