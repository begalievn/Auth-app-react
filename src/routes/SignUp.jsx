import { onSignUp } from "../api";
import SignupForm from "../components/forms/SignupForm";

function SignUp() {
  return (
    <div>
      <SignupForm />
      <div>
        <button onClick={onSignUp}>Sign Up Button</button>
      </div>
    </div>
  );
}

export default SignUp;
