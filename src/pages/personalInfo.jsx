import React from "react";
import FormControl from "../utils/formControl";

const PersonalInfo = () => {
  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-4xl leading-9">
          Personal info
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h3>

        <form action="" className="mt-5 space-y-4">
          <FormControl
            label={"Name"}
            type={"text"}
            id={"name"}
            placeholder={"e.g. Stephen King"}
          />
          <FormControl
            label={"Email Address"}
            type={"email"}
            id={"email"}
            placeholder={"e.g. stephenking@lorem.com"}
          />
          <FormControl
            label={"Phone Number"}
            type={"text"}
            id={"number"}
            placeholder={"e.g. +1 234 567 890"}
          />
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
