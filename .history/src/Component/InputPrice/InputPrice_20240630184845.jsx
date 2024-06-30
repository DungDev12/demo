import { Input } from "@nextui-org/react";

const InputPrice = () => {
    const 
  return (
    <div>
      <Input
        type="number"
        label="Price"
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
