import PropTypes from "prop-types";

const InputComponent = ({ name ,label}) => {
  return (
    <div className="relative">
      <input name={name} />
      <p></p>
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
};
export default InputComponent;
