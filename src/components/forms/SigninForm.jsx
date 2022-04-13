import { useRef } from "react";
import { onSignIn } from "../../api";
import classes from "./SigninForm.module.css";

function SigninForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const signinData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log(signinData);
    onSignIn(signinData);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="title" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
