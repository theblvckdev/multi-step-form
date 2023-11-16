import React, { useContext } from "react";
import { GlobalContex } from "../context/globalContext";
import { addOnsData } from "../constants/addOnsData";
import check from "../assets/images/icon-thank-you.svg";

const Summary = () => {
  const {
    selectedPlan,
    selectedAddOn,
    monthlyPlan,
    getTotalAmount,
    setCurrentStep,
    formCompeleted,
  } = useContext(GlobalContex);

  const plansSelected = [selectedPlan];
  const totalAmount = getTotalAmount();

  return (
    <>
      {formCompeleted ? (
        <div className="h-full flex justify-center items-center">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img src={check} alt="check svg" />
            </div>
            <div className="mt-5">
              <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
                Thank you!
              </h1>
              <p className="mt-5 text-gray-400">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
            Finishing up
          </h1>
          <h3 className="text-gray-400 mt-2">
            Double-check everything looks OK before confirming.
          </h3>

          <div className="md:mt-7 mt-5">
            <div className="rounded-lg bg-secondary-alabaster p-5">
              {plansSelected.map((data, index) => {
                const { title, monthlyFee, yearlyFee } = data;

                return (
                  <div key={index} className="plan_check">
                    <div className="flex items-center">
                      <div className="mr-auto">
                        <h3 className="text-primary-marineBlue md:text-lg text-[16px] font-medium">
                          {title} ({monthlyPlan ? "Monthly" : "Yearly"})
                        </h3>
                        <button
                          onClick={() => setCurrentStep(2)}
                          className="bg-transparent duration-700 p-0 border-0 outline-none text-gray-400 md:text-[16px] text-sm hover:text-primary-purplishBlue underline"
                        >
                          Change
                        </button>
                      </div>

                      <div>
                        <h3 className="text-primary-marineBlue md:text-lg text-[16px] font-bold">
                          ${monthlyPlan ? monthlyFee : yearlyFee}/
                          {monthlyPlan ? "mo" : "yr"}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}

              <hr className="bg-secondary-lightGray my-5" />

              <div className="add-ons_check space-y-2">
                {/* eslint-disable-next-line */}
                {addOnsData.map((data, index) => {
                  const { id, title, monthlyFee, yearlyFee } = data;

                  if (selectedAddOn[id] !== 0) {
                    return (
                      <div key={index} className="flex items-center">
                        <div className="mr-auto">
                          <div className="text-gray-400 md:text-[16px] text-sm">
                            {title}
                          </div>
                        </div>
                        <div className="text-primary-marineBlue md:text-[16px] text-sm font-medium">
                          +${monthlyPlan ? monthlyFee : yearlyFee}/
                          {monthlyPlan ? "mo" : "yr"}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <div className="mr-auto md:text-[16px] text-sm text-gray-400">
                  Total (per month)
                </div>
                <div>
                  <h3 className="text-primary-purplishBlue font-bold md:text-[19px] tet-[18px]">
                    {monthlyPlan ? "+" : null}${totalAmount}/
                    {monthlyPlan ? "mo" : "yr"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
