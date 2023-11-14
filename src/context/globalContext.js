import { createContext, useState } from "react";
import { plansData } from "../constants/planData";

export const GlobalContex = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const [monthlyPlan, setMonthlyPlan] = useState(true);
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [checkedBox, setCheckedBox] = useState(false);

  return (
    <GlobalContex.Provider
      value={{
        currentStep,
        setCurrentStep,
        completed,
        setCompleted,
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
        validName,
        setValidName,
        validEmail,
        setValidEmail,
        validNumber,
        setValidNumber,
        monthlyPlan,
        yearlyPlan,
        setMonthlyPlan,
        setYearlyPlan,
        selectedPlan,
        setSelectedPlan,
        checkedBox,
        setCheckedBox,
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
