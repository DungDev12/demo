import PropTypes from "prop-types";

const InputComponent = ({ name, label }) => {
  return (
    <div className="relative flex items-center justify-start gap-2 border-[1px] border-black my-2 p-2 rounded-[4px] group">
      <p
        className={`absolute top-[11px] left-[20px] padding-x- text-[17.5px] group-focus-within:top-[-8px] group-focus-within:text-[14px] bg-[#ffffff] leading-none`}
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
