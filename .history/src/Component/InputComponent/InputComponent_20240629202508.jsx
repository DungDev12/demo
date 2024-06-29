import PropTypes from "prop-types";

const InputComponent = ({ name, label }) => {
  return (
    <div className="relative flex items-center justify-start gap-2 border-[1px] border-black my-2 p-2 rounded-[4px] group">
      <p
        className={`absolute top-[50%] left-[50%] pointer-events-none text-[18px] -translate-x-1/2  -translate-y-1/2 group-focus-within:translate-x-1  group-focus-within:text-[14px] group-focus-within:-translate-y-1/2 bg-[#ffffff] px-2 leading-none transition duration-200 ease-linear`}
      >
        {label}
      </p>
      <input name={name} className="outline-none w-full" />
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
export default InputComponent;
