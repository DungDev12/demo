import Header from "./Header/Header";
import PropTypes from 'prop-types';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {
    children: PropTypes.string
  };
export default Layout;
