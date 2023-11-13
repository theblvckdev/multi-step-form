import { createContext, useState } from "react";

export const GlobalContex = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  // const 

  return (
    <GlobalContex.Provider
      value={{ currentStep, setCurrentStep, completed, setCompleted }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
