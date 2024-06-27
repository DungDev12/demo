import { Routes } from "react-router-dom";
import { routesAPI } from "./routes/routes";

function App() {
  return <>
    <Routes>
      {
        routesAPI.map(())
      }
    </Routes>
  </>;
}

export default App;
