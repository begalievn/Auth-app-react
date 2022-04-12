import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <div>
        <Link to="/">
          <h1 className={classes.h1}>MyAuth</h1>
        </Link>
      </div>
      <div className={classes.right}>
        <Link to="/signup">Sign Up</Link> <br></br>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
}

export default MainNavigation;
