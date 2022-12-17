import React, { useEffect, useState } from "react";
import axios from "../axios";
import Appbar from "../component/Appbar";
import SmTables from "../component/SmTables";
import "../component/style.css";
import swal from "sweetalert";

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
  const deletingUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/api/users/${id}`).then((res) => {
          console.log(res.data);
          console.log(res.data.status);
          if (res.data.status) {
            swal("Poof! User has been deleted!", {
              icon: "success",
            });
            usersListingApi();
          } else {
            swal("Poof! User not been deleted!", {
              icon: "error",
            });
          }
        });
      } else {
        swal("Your user is safe!");
      }
    });
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
      <SmTables users={users} deletingUser={deletingUser} showUser={showUser} />
    </div>
  );
}

export default UserListingPage;
