import React from "react";
import Button from "../utils/button";

const Footer = () => {
  return (
    <>
      <footer className=" absolute w-full p-3 left-0 right-0 bottom-0">
        <div className="flex">
          <div className="mr-auto">
            <Button
              text={"Go Back"}
              className={
                "bg-transparent text-gray-400 hover:text-primary-marineBlue"
              }
            />
          </div>
          <div className="text-right">
            <Button
              text={"Next Step"}
              className={"bg-primary-marineBlue text-white"}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
