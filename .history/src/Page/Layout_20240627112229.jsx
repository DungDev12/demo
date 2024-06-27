import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Greeting.propTypes = {
    name: PropTypes.string
  };
export default Layout;
