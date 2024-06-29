import PropTypes from "prop-types";
import { useState } from "react";

const InputComponent = ({ name, label, valueOut }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    valueOut({ name, value });
    setInput(value);
  };
  return (
    <div className="relative flex items-center justify-start gap-2 border-[1px] border-black my-2 p-2 rounded-[4px] group ">
      <p
        className={`absolute ${
          input !== ""
            ? "top-[-8px] text-[14px] left-[20px]"
            : "top-[11px] left-[20px] text-[17.5px]"
        } px-2  group-focus-within:top-[-8px] group-focus-within:text-[14px] bg-[#ffffff] leading-none transition-all duration-300 ease-linear`}
      >
        {label}
      </p>
      <input
        name={name}
        className="outline-none w-full"
        onChange={handleChange}
      />
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  valueOut: PropTypes.func,
};
export default InputComponent;
