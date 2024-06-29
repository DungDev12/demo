import PropTypes from "prop-types";

const InputComponent = ({ name }) => {
  return (
    <div className="">
      <input name={name} />
    </div>
  );
};
InputComponent.propTypes = {
  name: PropTypes.string,
};
export default InputComponent;
