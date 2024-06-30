import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { ConverterMoney } from "../ConverterMoney/Converter";
const InputPrice = ({ nameI }) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    const inputValue = e.target.value.replace(/\./g, ""); // Loại bỏ dấu chấm hiện có
    const numberValue = parseFloat(inputValue);
    if()
    if (!isNaN(numberValue)) {
      const formattedValue = numberValue.toLocaleString("de-DE");
      setValue(formattedValue);
    } else {
      setValue("");
    }
  };
  return (
    <div>
      <Input
        type="type"
        name={nameI}
        value={value}
        placeholder="ĐẶT CƯỢC TẠI ĐÂY 10K - 1M"
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
