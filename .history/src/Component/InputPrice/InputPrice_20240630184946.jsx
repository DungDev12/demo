import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

const InputPrice = ({ nameI }) => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Input
        type="number"
        name={nameI}
        label="Price"
        value={1}
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

export default InputPrice;
