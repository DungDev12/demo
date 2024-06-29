import PropTypes from "prop-types";

const InputComponent = ({ name, label }) => {
  return (
    <div className="relative">
      <input name={name} />
      <p>{label}</p>
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
export default InputComponent;
