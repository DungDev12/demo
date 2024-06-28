import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div className="bg-[#E6E6E6]">
      <Header />
      <ToastContainer />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;
