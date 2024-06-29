import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const InputComponent = ({ nameI, label, type, valueOut }) => {
  const [input, setInput] = useState("");
  const [err, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    valueOut({ name, value });
    setInput(value);
  };
  useEffect(() => {}, [input]);
  return (
    <div>
      <div className={`relative flex items-center justify-start gap-2 border-[1px] border-black mt-4 mb-2 p-2 rounded-[4px] group`}>
        <p
          className={`absolute ${
            input !== ""
              ? "top-[-8px] text-[14px] left-[20px]"
              : "top-[10.5px] left-[20px] text-[17.5px]"
          } px-2  group-focus-within:top-[-8px] group-focus-within:text-[14px] bg-[#ffffff] leading-none transition-all duration-300 ease-linear pointer-events-none ${
            err != "" ? "text-red-600" : ""
          }`}
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
      <p className="text-center text-[14px] text-red-600">err</p>
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
