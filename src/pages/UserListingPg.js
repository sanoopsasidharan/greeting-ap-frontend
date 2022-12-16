import React, { useEffect, useState } from "react";
import axios from "../axios";
import Appbar from "../component/Appbar";
import SmTables from "../component/SmTables";
import "../component/style.css";

function UserListingPage() {
  const [users, setUsers] = useState();
  const [showUser, setShowUser] = useState(false);
  const usersListingApi = () => {
    try {
      axios
        .get("/api/users/usersList")
        .then((res) => {
          console.log(res.data.users);
          if (res.data.users) {
            setShowUser(true);
            setUsers(res.data.users);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usersListingApi();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="userListPg-main-div">
        <h3>Users List</h3>
      </div>
      <SmTables users={users} showUser={showUser} />
    </div>
  );
}

export default UserListingPage;
