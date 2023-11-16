import React, { useContext } from "react";
import PersonalInfo from "../pages/personalInfo";
import Plans from "../pages/plans";
import AddOns from "../pages/addOns";
import { GlobalContex } from "../context/globalContext";
import Button from "../utils/button";
import Summary from "../pages/summary";

const Main = () => {
  const {
    currentStep,
    setCompleted,
    setCurrentStep,
    completed,
    name,
    email,
    number,
    setValidName,
    setValidEmail,
    setValidNumber,
    setFormCompeleted,
    formCompeleted
  } = useContext(GlobalContex);
  currentStep === 1 ? setCompleted(false) : setCompleted(true);

  const nextStep = (e) => {
    e.preventDefault();

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
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = (e) => {
    e.preventDefault();

    setCurrentStep(currentStep - 1);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setFormCompeleted(true);
  };

  return (
    <>
      <div className="md:overflow-hidden md:min-h-full md:shadow-none shadow-md mx-auto md:m-0 rounded-xl md:rounded-none md:w-full w-[100%] md:bg-transparent min-h-[400px] bg-white z-10 mt-[84px]">
        <form
          action="#"
          className="md:mx-16 md:my-0 mx-6 my-6 py-0 md:py-10 relative h-full"
        >
          {currentStep === 1 ? <PersonalInfo /> : null}
          {currentStep === 2 ? <Plans /> : null}
          {currentStep === 3 ? <AddOns /> : null}
          {currentStep === 4 ? <Summary /> : null}

          {formCompeleted ? null : (
            <footer className=" absolute md:block hidden w-full p-3 left-0 right-0 bottom-0">
              <div className="flex">
                <div className="mr-auto">
                  {completed ? (
                    <Button
                      text={"Go Back"}
                      onClick={goBack}
                      className={
                        "bg-transparent text-gray-400 hover:text-primary-marineBlue"
                      }
                    />
                  ) : null}
                </div>
                <div className="text-right">
                  <Button
                    text={currentStep === 4 ? "Confirm" : "Next Step"}
                    onClick={currentStep === 4 ? submitForm : nextStep}
                    className={
                      currentStep === 4
                        ? "bg-primary-purplishBlue text-white"
                        : "bg-primary-marineBlue text-white"
                    }
                  />
                </div>
              </div>
            </footer>
          )}
        </form>
      </div>
    </>
  );
};

export default Main;
