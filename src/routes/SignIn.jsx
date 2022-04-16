import SigninForm from "../components/forms/SigninForm";
import classes from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={classes.div}>
      <h2 className={classes.header}>SignIn Page</h2>
      <SigninForm />
      <div></div>
    </div>
  );
}

export default SignIn;
