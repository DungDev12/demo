import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};

const AppContext = ({ children }) => {
  const [db, setDb] = useState(null);
  const fetchTableHowPlay = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/how-play/${id}`
      );
      // console.log(response);
      if (response.status === 200) {
        setDb(response.data);
      } else if (response.status === 204) {
        setDb(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Context.Provider value={{ fetchTableHowPlay }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.object,
};
export default AppContext;
