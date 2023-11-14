import React, { useContext } from "react";
import PersonalInfo from "../pages/personalInfo";
import Plans from "../pages/plans";
import AddOns from "../pages/addOns";
import { GlobalContex } from "../context/globalContext";
import Button from "../utils/button";

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

    console.log("submitted");
    setCurrentStep(4);
  };

  return (
    <>
      <div className="overflow-hidden w-full">
        <form action="#" className="mx-16 py-10 relative h-full">
          {currentStep === 1 ? <PersonalInfo /> : null}
          {currentStep === 2 ? <Plans /> : null}
          {currentStep === 3 ? <AddOns /> : null}

          {currentStep === 4 ? null : (
            <footer className=" absolute w-full p-3 left-0 right-0 bottom-0">
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
                    text={currentStep === 3 ? "Confirm" : "Next Step"}
                    onClick={currentStep === 3 ? submitForm : nextStep}
                    className={
                      currentStep === 3
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
