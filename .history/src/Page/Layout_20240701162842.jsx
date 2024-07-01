import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="bg-[#E6E6E6]">
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;
