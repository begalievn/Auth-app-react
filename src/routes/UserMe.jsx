import { useState, useEffect } from "react";
import { onGetUser } from "../api";

function UserMe() {
  // State for userData which will be taken from the server
  const [userData, setUserData] = useState({});

  // State for the data if it is ready to display
  const [isDataLoading, SetIsDataLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    onGetUser(token).then((response) => {
      console.log(response);
      setUserData(response.data);
      SetIsDataLoading(true);
    });
  });

  return (
    <div>
      <h1>User Page</h1>
      {isDataLoading ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Id: {userData.id}</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default UserMe;
