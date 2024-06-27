import { Routes } from "react-router-dom";
import { routesAPI } from "./routes/routes";

function App() {
  return <>
    <Routes>
      {
        routesAPI.map((route, i) => {
          const LayoutPage = route.isHeader ? Layout
        })
      }
    </Routes>
  </>;
}

export default App;
