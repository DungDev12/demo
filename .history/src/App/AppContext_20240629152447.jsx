import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};

return (
  <AuthContext.Provider
    value={{ isLoggedIn, userRole, username, login, logout, navigate }}
  >
    {children}
  </AuthContext.Provider>
);
