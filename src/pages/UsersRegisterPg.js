import React, { useState } from "react";
import From from "../component/From";
import axios from "../axios";
import Appbar from "../component/Appbar";
import swal from "sweetalert";

function UserRegisterPg() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const registerApi = () => {
    if (name === "" || age === "" || number === "" || email === "") {
      swal("Sorry", "Please fill the form properly", "info");
      return;
    }

    try {
      axios
        .post("/api/users/register", { name, age, number, email })
        .then((res) => {
          console.log(res);
          swal("Completed", "You Create a user", "success");
          setName("");
          setAge("");
          setNumber("");
        })
        .catch((err) => {
          swal("Sorry", "there is some issues try again", "error");
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Appbar />
      <From
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
        registerApi={registerApi}
      />
    </div>
  );
}

export default UserRegisterPg;
