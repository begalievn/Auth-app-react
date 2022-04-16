import { useEffect, useState } from "react";
import { onGetAllUsers } from "../api";
import TableComponent from "../components/layout/TableComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Main() {
  // State for storing users data
  const [usersData, setUsersData] = useState([]);

  const user = useSelector((state) => state.user.value);

  // State for

  useEffect(() => {
    const token = localStorage.getItem("token");
    onGetAllUsers(token).then((response) => {
      console.log(response.data.users);
      setUsersData(response.data.users);
    });
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: "15px", fontWeight: "bold" }}>All Users</h1>
      {user.loggedIn ? (
        usersData.length === 0 ? (
          <p style={{ marginLeft: "15px", fontWeight: "bold" }}>Loading...</p>
        ) : (
          <TableComponent usersData={usersData} />
        )
      ) : (
        <Link to="/signin">
          <p style={{ marginLeft: "15px", fontWeight: "bold", color: "red" }}>
            Login first
          </p>
        </Link>
      )}
    </div>
  );
}

export default Main;
