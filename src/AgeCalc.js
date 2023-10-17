import React, { useState } from "react";
import "./AgeCalc.css";

export default function AgeCalc() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateInput = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdateInput.getFullYear();
    setAge(age);
  };

  return (
    <>
      <div className="AgeCalc">
        <center>
          <h1>Age Calculator</h1>
          <h4 className="my-3">Enter your date of birth</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              style={{ width: "20%" }}
            />{" "}
            <br />
            <button onClick={calculateAge} className="btn">
              Calculate Age
            </button>
          </form>
          {age !== null && <h2>You are {age} years old</h2>}
        </center>
      </div>
    </>
  );
}
