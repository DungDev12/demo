import { Routes } from "react-router-dom";
import { routesAPI } from "./routes/routes";
import { Fragment } from "react";
import { Layout } from "./Page/Layout";
function App() {
  return (
    <>
      <Routes>
        {routesAPI.map((route, i) => {
          const LayoutPage = route.isHeader ? Layout : Fragment;
          return (
            <Route
          );
        })}
      </Routes>
    </>
  );
}

export default App;
