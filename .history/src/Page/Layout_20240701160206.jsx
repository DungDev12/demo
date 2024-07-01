import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="bg-[#E6E6E6]">
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </div>
      <div className="absolute z-[10] w-full h-full top-0 left-0 bg-[#00000047]">
        <div className=""></div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;
