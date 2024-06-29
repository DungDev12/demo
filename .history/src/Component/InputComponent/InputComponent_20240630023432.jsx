import PropTypes from "prop-types";
import { useState } from "react";

const InputComponent = ({ nameI, label, type, valueOut }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (nameI.toLowerCase() === "phone") {
      if(/[a-zA-Z]/.test(value)){
        console.log("có chữ");
      }
    }
    // valueOut({ name, value });
    // setInput(value);
  };
  return (
    <div className="relative flex items-center justify-start gap-2 border-[1px] border-black my-4 p-2 rounded-[4px] group">
      <p
        className={`absolute ${
          input !== ""
            ? "top-[-8px] text-[14px] left-[20px]"
            : "top-[10.5px] left-[20px] text-[17.5px]"
        } px-2  group-focus-within:top-[-8px] group-focus-within:text-[14px] bg-[#ffffff] leading-none transition-all duration-300 ease-linear pointer-events-none`}
      >
        {label}
      </p>
      <input
        name={nameI}
        className="outline-none w-full"
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};
InputComponent.propTypes = {
  nameI: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  valueOut: PropTypes.func,
};
export default InputComponent;
