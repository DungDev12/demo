import PropTypes from "prop-types";

const InputComponent = ({ name, label }) => {
  return (
    <div className="relative flex items-center justify-start gap-2 border-b-[1px] border-black m">
      <p>{label}</p>
      <input name={name} className="outline-none" />
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
export default InputComponent;
