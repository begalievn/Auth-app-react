import classes from "./Modal.module.css";

function Modal() {
  return (
    <div className={classes.modalO}>
      <div className={classes.modalContent}></div>
      <h1>This is the Modal</h1>
    </div>
  );
}

export default Modal;
