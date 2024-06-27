import { Routes } from "react-router-dom";
import { routesAPI } from "./routes/routes";
import { Fragment } from "react";
import {}
function App() {
  return <>
    <Routes>
      {
        routesAPI.map((route, i) => {
          const LayoutPage = route.isHeader ? Layout : Fragment
        })
      }
    </Routes>
  </>;
}

export default App;
