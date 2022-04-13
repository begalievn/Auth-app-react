import axios from "axios";
const BASE_URL = `https://sheltered-dusk-77313.herokuapp.com/`;

// POST SignUp request
export const onSignUp = async (signupData) => {
  console.log("Sign up button is clicked");
  const response = await axios.post(`${BASE_URL}auth/signup`, signupData);
  console.log(response);
  return response;
};

export const onSignIn = async (signinData) => {
  console.log("Sign in button is clicked");
  const response = await axios.post(`${BASE_URL}auth/signin`, signinData);
  console.log(response);
};

export const onGetAllUsers = async () => {
  console.log("Gelt all users request");
  const response = axios.get(`${BASE_URL}users`);
  console.log(response);
};

export const onGetUser = async () => {
  console.log("Get a user ");
};
