import PropTypes from "prop-types";

const InputComponent = ({ name, label, valueOut }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <div className="relative flex items-center justify-start gap-2 border-[1px] border-black my-2 p-2 rounded-[4px] group">
      <p
        className={`absolute top-[11px] left-[20px] px-2 text-[17.5px] group-focus-within:top-[-8px] group-focus-within:text-[14px] bg-[#ffffff] leading-none transition-all duration-300 ease-linear`}
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
  label: PropTypes.string,
};
export default InputComponent;
