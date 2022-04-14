import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onSignUp } from "../../api";
import { Modal } from "antd";
import classes from "./SignupForm.module.css";

function SignupForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ageInputRef = useRef();
  const nameInputRef = useRef();

  // State for Sign up button while it is wating for response from server
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // navigate from useNavigate react-router-dom hook
  const navigate = useNavigate();

  // Modal state for showing and hiding it
  const [isModalVisible, setIsModalVisible] = useState(false);

  // State for the text of the modal: is user successfully created?
  const [responseMessage, setResponseMessage] = useState("");

  // State if the error occured during sign up
  const [errorOccured, setErrorOccured] = useState(false);

  const showModal = () => {
    console.log("show Modal is open");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/signin");
  };

  const handleCancel = () => {
    navigate("/signup");
    setIsModalVisible(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    const signupData = {
      email: enteredEmail,
      password: enteredPassword,
      age: Number(enteredAge),
      name: enteredName,
    };

    // Set the Sign up button to loading state
    setIsButtonLoading(true);

    onSignUp(signupData)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setResponseMessage(response.data.msg);
          setIsButtonLoading(false);
          setErrorOccured(false);
          showModal();
        }
      })
      .catch((error) => {
        console.log(error);
        setResponseMessage("* User already exists");
        setIsButtonLoading(false);
        setErrorOccured(true);
      });
  };

  return (
    <>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          {errorOccured ? (
            <div className={classes.control} style={{ color: "red" }}>
              <label>{responseMessage}</label>
            </div>
          ) : null}

          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" required id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="text" required id="password" ref={passwordInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="age">Age</label>
            <input type="number" required id="age" ref={ageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={nameInputRef} />
          </div>
          <div className={classes.actions}>
            <button>{isButtonLoading ? "Loading..." : "Sign Up"}</button>
          </div>
        </form>
      </div>

      <Modal
        title="Sign Up Result"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {responseMessage}
      </Modal>
    </>
  );
}

export default SignupForm;
