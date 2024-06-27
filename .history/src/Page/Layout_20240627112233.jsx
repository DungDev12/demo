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
    name: PropTypes.children
  };
export default Layout;
