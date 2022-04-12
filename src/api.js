import axios from "axios";
const BASE_URL = `https://sheltered-dusk-77313.herokuapp.com/`;

// POST SignUp request
export const onSignUp = () => {
  console.log("Sign up button is clicked");
};

export const onSignIn = async (signinData) => {
  console.log("Sign in button is clicked");
  const response = await axios.post(`${BASE_URL}auth/signin`, signinData);
  console.log(response);
};
