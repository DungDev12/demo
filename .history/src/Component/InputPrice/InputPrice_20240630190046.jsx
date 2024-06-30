import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";
const InputPrice = ({ nameI }) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    const numberValue = parseFloat(inputValue.replace(/,/g, ""));
    if (!isNaN(numberValue)) {
      const formattedValue = numberValue.toLocaleString("de-DE", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
      setValue(formattedValue);
    } else {
      setValue("");
    }
  };
  return (
    <div>
      <Input
        type="number"
        name={nameI}
        label="Price"
        value={value}
        placeholder="1.000"
        labelPlacement="outside"
        onChange={handleOnChange}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">VNĐ</span>
          </div>
        }
      />
    </div>
  );
};
InputPrice.propTypes = {
  nameI: PropTypes.string,
};
export default InputPrice;
