import SignupForm from "../components/forms/SignupForm";
import classes from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={classes.div}>
      <h2 className={classes.header}>SignUp Page</h2>
      <SignupForm />
      <div></div>
    </div>
  );
}

export default SignUp;
