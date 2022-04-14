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
      console.log(response.data.users.slice(-10));
      setUsersData(response.data.users.slice(-10));
    });
  }, []);

  return (
    <div>
      <h1>Main page</h1>
      <TableComponent usersData={usersData} />
    </div>
  );
}

export default Main;
