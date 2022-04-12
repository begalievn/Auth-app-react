import { useRef } from "react";
import { onSignIn } from "../../api";

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
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" required id="title" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
