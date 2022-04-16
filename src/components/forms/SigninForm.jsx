import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { onSignIn } from "../../api";
import classes from "./SigninForm.module.css";

function SigninForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // State for checking if fields are filled correctly
  const [areFieldIncorrect, setAreFieldsIncorrect] = useState(false);

  // State for Sign in button if while it is loading the data
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // useNavigate hook to navigate between pages
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const signinData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    // Set isButtonLoading to true while waiting for response from server
    setIsButtonLoading(true);

    onSignIn(signinData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(response);
        if (response.status === 201) {
          navigate("/users/me");
        }
      })
      .catch((error) => {
        console.error(error);
        setIsButtonLoading(false);
        setAreFieldsIncorrect(true);
      });
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        {areFieldIncorrect ? (
          <div className={classes.control} style={{ color: "red" }}>
            <label> * Email or password is incorrect</label>
          </div>
        ) : null}

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="title" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isButtonLoading ? "Loading..." : "Sign In"}</button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
