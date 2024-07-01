import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="bg-[#E6E6E6]">
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </div>
      MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;
