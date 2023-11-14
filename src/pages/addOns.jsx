import React, { useContext } from "react";
import { addOnsData } from "../constants/addOnsData";
import FormControl from "../utils/formControl";
import { GlobalContex } from "../context/globalContext";

const AddOns = () => {
  const { monthlyPlan } = useContext(GlobalContex)

  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-4xl leading-9">
          Pick add-ons
        </h1>
        <h3 className="text-gray-400 mt-2">
          Add-ons help enhance your gaming experience.
        </h3>

        <div className="md:mt-7 mt-5">
          <div className="flex flex-col md:gap-4 gap-3">
            {addOnsData.map((data, index) => {
              const { id, title, feature, monthlyFee, yearlyFee } = data;

              return (
                <div
                  key={index}
                  className="py-3 px-4 rounded-lg border border-secondary-lightGray duration-700 hover:border-primary-purplishBlue flex items-center"
                >
                  <div className="flex items-center gap-4 mr-auto">
                    <div>
                      <FormControl
                        type={'checkbox'}
                        valid={true}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-marineBlue">
                        {title}
                      </h3>
                      <div className="text-gray-400 text-[15px]">{feature}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-primary-purplishBlue text-sm font-medium">
                      +${monthlyPlan ? monthlyFee : yearlyFee}/{monthlyPlan ? 'mo' : 'yr'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
