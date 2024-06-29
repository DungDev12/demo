import PropTypes from "prop-types";

const InputComponent = ({ name }) => {
  return (
    <div className="relative">
      <input name={name} />
      <label></label>
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
};
export default InputComponent;
