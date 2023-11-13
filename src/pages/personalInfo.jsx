import React, { useState } from "react";
import FormControl from "../utils/formControl";

const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-4xl leading-9">
          Personal info
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h3>

        <div className="mt-5 space-y-4">
          <FormControl
            label={"Name"}
            type={"text"}
            id={"name"}
            placeholder={"e.g. Stephen King"}
            onchange={(e) => setName(e.target.value)}
            value={name}
          />
          <FormControl
            label={"Email Address"}
            type={"email"}
            id={"email"}
            placeholder={"e.g. stephenking@lorem.com"}
            onchange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <FormControl
            label={"Phone Number"}
            type={"text"}
            id={"number"}
            placeholder={"e.g. +1 234 567 890"}
            onchange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
