import { useEffect, useState } from "react";
import { onGetAllUsers } from "../api";
import TableComponent from "../components/layout/TableComponent";

function Main() {
  // State for storing users data
  const [usersData, setUsersData] = useState([]);

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
      <h1>All Users</h1>
      {usersData.length === 0 ? (
        <p>Loading</p>
      ) : (
        <TableComponent usersData={usersData} />
      )}
    </div>
  );
}

export default Main;
