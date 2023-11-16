import React, { useContext } from "react";
import { plansData } from "../constants/planData";
import { GlobalContex } from "../context/globalContext";

const Plans = () => {
  const {
    monthlyPlan,
    yearlyPlan,
    setMonthlyPlan,
    setYearlyPlan,
    selectedPlan,
    setSelectedPlan,
    checkedBox,
    setCheckedBox,
  } = useContext(GlobalContex);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setYearlyPlan(true);
      setMonthlyPlan(false);
    } else {
      setYearlyPlan(false);
      setMonthlyPlan(true);
    }
    setCheckedBox(!checkedBox);
  };

  const selectPlan = (id) => {
    const planSelected = plansData.find((data) => data.id === id);
    setSelectedPlan(planSelected);
  };

  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Select your plan
        </h1>
        <h3 className="text-gray-400 mt-2">
          You have the option of monthly or yearly billing.
        </h3>

        <div className="md:mt-7 mt-5">
          <div className="flex md:flex-row flex-col md:gap-4 gap-3">
            {plansData.map((data, index) => {
              const {
                iconUrl,
                title,
                monthlyFee,
                yearlyFee,
                monthlyFreeTrial,
                id,
              } = data;

              return (
                <div
                  key={index}
                  onClick={() => selectPlan(id)}
                  className={
                    selectedPlan.id === id
                      ? "md:p-4 p-2.5 basis-1/3 cursor-pointer duration-700 bg-secondary-alabaster border-primary-purplishBlue rounded-lg border md:block flex gap-3 items-center"
                      : "md:p-4 p-2.5 basis-1/3 cursor-pointer duration-700 hover:border-primary-purplishBlue rounded-lg border border-secondary-lightGray md:block flex gap-3 items-center"
                  }
                >
                  <div>
                    <img src={iconUrl} alt={title} />
                  </div>
                  <div className="md:mt-7 mt-0">
                    <h3 className="text-lg font-medium text-primary-marineBlue">
                      {title}
                    </h3>
                    <div className="text-gray-400 text-sm font-medium">
                      {monthlyPlan ? `$${monthlyFee}/mo` : `$${yearlyFee}/yr`}
                    </div>
                    {yearlyPlan ? (
                      <div className="text-sm font-medium text-primary-marineBlue">
                        {monthlyFreeTrial} months free
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <div className="p-3 rounded-lg bg-secondary-alabaster flex justify-center">
              <div className="flex gap-3 items-center justify-center">
                <div
                  className={
                    monthlyPlan
                      ? "font-medium text-primary-marineBlue"
                      : "font-medium text-gray-400"
                  }
                >
                  Monthly
                </div>
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    value={checkedBox}
                    checked={checkedBox}
                    onChange={handleCheck}
                    className="sr-only peer"
                  />
                  <div className="w-[32px] h-[19px] bg-gray-200 rounded-full peer dark:bg-primary-marineBlue peer-checked:after:translate-x-full after:absolute after:m-[2.5px] after:bg-white after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all peer-checked:bg-primary-marineBlue"></div>
                </label>
                <div
                  className={
                    yearlyPlan
                      ? "font-medium text-primary-marineBlue"
                      : "font-medium text-gray-400"
                  }
                >
                  Yearly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
