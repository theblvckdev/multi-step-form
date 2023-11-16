import React, { useContext } from "react";
import { data } from "../constants/sidebarData";
import { GlobalContex } from "../context/globalContext";

const Sidebar = () => {
  const { currentStep, setCurrentStep, name, email, number, setValidName, setValidEmail, setValidNumber, setFormCompeleted } = useContext(GlobalContex)

  const changeStep = (id) => {
    if (name.length < 1) {
      setValidName(false);
    }
     if (email.length < 1) {
      setValidEmail(false);
    }
     if (number.length < 1) {
      setValidNumber(false);
    }

    if (name.length >= 1 && email.length >= 1 && number.length >= 1) {
      setValidName(true);
      setValidEmail(true);
      setValidNumber(true);
      setCurrentStep(id);
    }
    setFormCompeleted(false)
  }

  return (
    <>
      <aside className="bg-mobile absolute top-0 left-0 right-0 md:relative md:bg-desktop bg-no-repeat h-[50vh] md:h-full p-8 overflow-hidden md:rounded-xl gap-4 md:gap-0 w-screen md:w-[42.5%] flex flex-row md:flex-col items-start md:justify-start justify-center">
        {data.map((data, index) => {
          const { id, step, title } = data;

          return (
            <div
              key={index}
              className="flex items-center space-x-4 leading-4 sm:mb-8">
              <div onClick={() => changeStep(id)} className={`md:w-8 cursor-pointer md:h-8 w-10 h-10 rounded-full flex items-center justify-center font-medium ${currentStep === id ? 'border border-primary-lightBlue bg-primary-lightBlue text-primary-marineBlue' : 'border border-primary-lightBlue text-secondary-lightGray' }`}>
                {id}
              </div>
              <div className="hidden md:block">
                <p className="uppercase text-secondary-lightGray text-sm font-medium">
                  {step}
                </p>
                <p className="uppercase text-secondary-alabaster font-medium tracking-widest">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </aside>
    </>
  );
};

export default Sidebar;
