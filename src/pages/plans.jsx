import React from "react";
import { plansData } from "../constants/planData";

const Plans = () => {
  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-4xl leading-9">
          Select your plan
        </h1>
        <h3 className="text-gray-400 mt-2">
          You have the option of monthly or yearly billing.
        </h3>

        <div className="mt-7">
          <div className="flex gap-4">
            {plansData.map((data, index) => {
              const {
                iconUrl,
                title,
                monthlyFee,
                yearlyFee,
                monthlyFreeTrial,
              } = data;

              return (
                <div className="p-4 basis-1/3 cursor-pointer duration-700 hover:border-primary-purplishBlue rounded-lg border border-secondary-lightGray">
                  <div>
                    <img src={iconUrl} alt={title} />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-primary-marineBlue">
                      {title}
                    </h3>
                    <div className="text-gray-400 text-sm font-medium">
                      ${yearlyFee}/yr
                    </div>
                    <div className="text-sm font-medium text-primary-marineBlue">
                      {monthlyFreeTrial} months free
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            <div className="p-3 rounded-lg bg-gray-50 flex justify-center">
              <div className="flex gap-3 items-center justify-center">
                <div className="font-medium text-gray-400">Monthly</div>
                <label class="relative items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-[34px] h-[19px] bg-gray-200 rounded-full peer dark:bg-primary-marineBlue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[1.5px] after:start-[1.5px] after:bg-white after:border after:rounded-full after:h-[15px] after:w-[15px] after:transition-all dark:border-gray-600 peer-checked:bg-primary-marineBlue"></div>
                </label>
                <div className="font-medium text-gray-400">Yearly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
