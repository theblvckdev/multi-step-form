import React, { useContext } from "react";
import FormControl from "../utils/formControl";
import { GlobalContex } from "../context/globalContext";

const PersonalInfo = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
    validName,
    validEmail,
    validNumber,
    setValidName,
    setValidEmail,
    setValidNumber
  } = useContext(GlobalContex);

  const setNameLogic = (e) => {
    setName(e.target.value);
    if (name.length >= 1) {
      setValidName(true);
    }
  }; 

  if (name.length >= 1) {
    setValidName(true);
  }

  const setEmailLogic = (e) => {
    setEmail(e.target.value);
    if (email.length >= 1) {
      setValidEmail(true);
    }
  };

  if (email.length >= 1) {
    setValidEmail(true);
  }

  const setNumberLogic = (e) => {
    setNumber(e.target.value);
    if (number.length >= 1) {
      setValidNumber(true);
    }
  };

  if (number.length >= 1) {
    setValidNumber(true);
  }

  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Personal info
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h3>

        <div className="md:mt-7 mt-5 space-y-4">
          <FormControl
            label={"Name"}
            type={"text"}
            id={"name"}
            placeholder={"e.g. Stephen King"}
            onchange={setNameLogic}
            value={name}
            valid={validName ? true : false}
          />
          <FormControl
            label={"Email Address"}
            type={"email"}
            id={"email"}
            placeholder={"e.g. stephenking@lorem.com"}
            onchange={setEmailLogic}
            value={email}
            valid={validEmail ? true : false}
          />
          <FormControl
            label={"Phone Number"}
            type={"text"}
            id={"number"}
            placeholder={"e.g. +1 234 567 890"}
            onchange={setNumberLogic}
            value={number}
            valid={validNumber ? true : false}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
