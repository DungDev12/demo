import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};

const AppContext = ({ children }) => {
  const [db, setDb] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [rule, setRule] = useState(null);

  const fetchTableHowPlay = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/how-play/${id}`
      );
      //   console.log(response);
      if (response.status === 200) {
        setDb(response.data);
      } else if (response.status === 204) {
        setDb(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchAPI = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/load-settings"
      );
      if (response.status === 200) {
        // console.log(response.data._rules);
        setHistoryData(response.data._historyBetGame);
        setRule(response.data._rules);
      } else {
        console.log("Lỗi khi lấy dữ liệu");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <Context.Provider
      value={{
        fetchTableHowPlay,
        db,
        historyData,
        setHistoryData,
        rule,
        setRule,
      }}
    >
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.object,
};
export default AppContext;
