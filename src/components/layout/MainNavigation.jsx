import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";

function MainNavigation() {
  const user = useSelector((state) => state.user.value);

  return (
    <nav className={classes.nav}>
      <div className={classes.left}>
        <Link to="/">
          <h1 className={classes.h1}>MyAuth</h1>
        </Link>
        <Link to="/users">All Users</Link>
        <div></div>
      </div>
      <div className={classes.right}>
        {user.loggedIn ? (
          <Link to="/users/me">
            {user.name} | {user.email}
          </Link>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
