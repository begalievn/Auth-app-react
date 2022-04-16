import { useSelector } from "react-redux";
import { Button } from "antd";
import classes from "./UserMe.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/user";
import { useNavigate } from "react-router-dom";

function UserMe() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.div}>
      <h1 className={classes.header}>User Page</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Status:</strong> {user.status}
      </p>
      <Button
        type="primary"
        onClick={() => {
          dispatch(logout());
          localStorage.clear();
          navigate("/signin");
        }}
      >
        Log Out
      </Button>
    </div>
  );
}

export default UserMe;
