import Header from "./Header/Header";

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
