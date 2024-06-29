import PropTypes from "prop-types";

const InputComponent = ({ name, label }) => {
  return (
    <div className="relative flex items-center justify-start gap-2 border-[1px] border-black my-2 p-2 rounded-[4px] group transition duration-200 ease-linear">
      <p
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-[18px]  group-focus-within:-top-0 group-focus-within:text-[14px] group-focus-within:left-[3rem] bg-[#ffffff] px-2`}
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
