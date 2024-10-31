import React from "react";

const FormInput = ({name, type}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 relative mb-4 justify-center h-[50px] input-container">
        <input
          className="form-input absolute left-0 px-8 h-full focus:color-red rounded-lg"
          type={type}
          placeholder=""
        />
        <p className="text-red-500 text-sm z-[20] px-4 ">{name}</p>
      </div>
    </>
  );
};

export default FormInput;
