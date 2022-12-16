import React, { useState } from "react";
import From from "../component/From";
import axios from "../axios";
import Appbar from "../component/Appbar";
function UserRegisterPg() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const registerApi = () => {
    try {
      axios
        .post("/api/users/register", { name, age, number, email })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
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
        place={place}
        setPlace={setPlace}
        registerApi={registerApi}
      />
    </div>
  );
}

export default UserRegisterPg;
