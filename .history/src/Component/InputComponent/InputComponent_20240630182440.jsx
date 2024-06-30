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
  useEffect(() => {
    if (nameI.toLowerCase() === "phone") {
      if (input == "" || input.length === 0) {
        setError("");
      } else {
        if (isNaN(input)) {
          setError("Số điện thoại phải là số");
        } else if (!/^0/.test(input)) {
          setError("Số điện thoại bắt đầu là số 0");
        } else if (!/^0[3789]/.test(input)) {
          setError("Số điện thoại không hợp lệ");
        } else if (input.length < 10) {
          setError("Số điện thoại phải có 10 số");
        } else {
          setError("");
        }
      }
    }
  }, [input]);
  return (
    <div>
      <div
        className={`relative flex items-center justify-start gap-2 border-[1px] border-black my-2 p-2 rounded-[4px] group ${
          err != "" ? "border-red-600" : "border-black"
        }`}
      >
        <p
          className={`absolute  ${
            input !== ""
              ? "top-[-8px] text-[14px] left-[20px]"
              : "top-[10.5px] left-[20px] text-[17.5px]"
          } px-2  group-focus-within:top-[-8px] group-focus-within:text-[14px] bg-[#ffffff] leading-none transition-all duration-150 ease-linear pointer-events-none ${
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
          maxLength={nameI.toLowerCase() === "phone" ? 10 : ""}
        />
      </div>
      {err && <p className="text-center text-[14px] text-red-600">{err}</p>}
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
