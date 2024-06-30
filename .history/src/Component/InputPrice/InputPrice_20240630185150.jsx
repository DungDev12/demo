import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";
import ConverterMoney from "../ConverterMoney/Converter";
const InputPrice = ({ nameI }) => {
  const [value, setValue] = useState(null);
  const handleOnChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <Input
        type="number"
        name={nameI}
        label="Price"
        value={ConverterMoney(value.toString(), ".")}
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
