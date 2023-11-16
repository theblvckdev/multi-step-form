import React, { useContext } from "react";
import { GlobalContex } from "../context/globalContext";

const AddOns = () => {
  const {
    monthlyPlan,
    setSelectedAddOn,
    selectedAddOn,
    addOnCheckBox,
    allAddOnsData,
    setAllAddOnsData,
  } = useContext(GlobalContex);

  const handleAddOnCheck = (index, id) => {
    const newAddOns = [...allAddOnsData];
    newAddOns[index].selected = !newAddOns[index].selected;
    setAllAddOnsData(newAddOns);

    if (newAddOns[index].selected) {
      setSelectedAddOn((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    } else {
      setSelectedAddOn((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Pick add-ons
        </h1>
        <h3 className="text-gray-400 mt-2">
          Add-ons help enhance your gaming experience.
        </h3>

        <div className="md:mt-7 mt-5">
          <div className="flex flex-col md:gap-4 gap-3">
            {allAddOnsData.map((data, index) => {
              const { id, title, feature, monthlyFee, yearlyFee, selected } =
                data;

              return (
                <div
                  onClick={() => handleAddOnCheck(index, id)}
                  key={index}
                  className={
                    selected
                      ? "md:py-3 py-2.5 cursor-pointer md:px-4 px-2.5 rounded-lg border border-primary-purplishBlue duration-700 bg-secondary-alabaster flex items-center"
                      : "md:py-3 py-2.5 cursor-pointer md:px-4 px-2.5 rounded-lg border border-secondary-lightGray duration-700 hover:border-primary-purplishBlue flex items-center"
                  }
                >
                  <div className="flex items-center gap-4 mr-auto">
                    <div>
                      <input
                        type="checkbox"
                        value={addOnCheckBox}
                        checked={selected}
                        onChange={() => handleAddOnCheck(index, id)}
                        className="w-4 h-4 accent-primary-purplishBlue"
                      />
                    </div>
                    <div>
                      <h3 className="md:text-lg text-[15px] font-medium text-primary-marineBlue">
                        {title}
                      </h3>
                      <div className="text-gray-400 text-[13px] md:text-[15px]">
                        {feature}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-primary-purplishBlue text-sm font-medium">
                      +${monthlyPlan ? monthlyFee : yearlyFee}/
                      {monthlyPlan ? "mo" : "yr"}
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
