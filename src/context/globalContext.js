import { createContext, useState } from "react";
import { addOnsData } from "../constants/addOnsData";
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
  const [selectedPlan, setSelectedPlan] = useState(plansData[0]);

  const getDefaultAddOns = () => {
    let addOns = {};
    for (let i = 1; i < addOnsData.length + 1; i++) {
      addOns[i] = 0;
    }

    return addOns;
  };

  const [selectedAddOn, setSelectedAddOn] = useState(getDefaultAddOns());
  const [checkedBox, setCheckedBox] = useState(false);
  const [allAddOnsData, setAllAddOnsData] = useState(addOnsData);
  const [formCompeleted, setFormCompeleted] = useState(false);

  let comparison = monthlyPlan
    ? selectedPlan.monthlyFee
    : selectedPlan.yearlyFee;

  const getTotalAmount = () => {
    let addOnsTotalAmount = 0;
    let totalAmount = 0;
    for (const item in selectedAddOn) {
      if (selectedAddOn[item] > 0) {
        let itemInfo = addOnsData.find((addOn) => addOn.id === Number(item));
        addOnsTotalAmount +=
          selectedAddOn[item] * monthlyPlan
            ? itemInfo.monthlyFee
            : itemInfo.yearlyFee;

        totalAmount = addOnsTotalAmount + comparison;
      }
    }

    return totalAmount;
  };

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
        selectedAddOn,
        setSelectedAddOn,
        allAddOnsData,
        setAllAddOnsData,
        getTotalAmount,
        formCompeleted,
        setFormCompeleted
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
