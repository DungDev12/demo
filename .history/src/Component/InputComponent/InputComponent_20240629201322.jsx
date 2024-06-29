import PropTypes from "prop-types";

const InputComponent = ({ name, label }) => {
  return (
    <div className="relative flex items-center justify-start gap-2 border-b-[1px] border-black my-2 group">
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none group-focus-within:">
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
