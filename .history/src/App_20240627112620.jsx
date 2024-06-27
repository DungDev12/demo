import { Route, Routes } from "react-router-dom";
import { routesAPI } from "./routes/routes";
import { Fragment } from "react";
import Layout from "./Page/Layout";
function App() {
  return (
    <>
      <Routes>
        {routesAPI.map((route, i) => {
          const LayoutPage = route.isHeader ? Layout : Fragment;
          const Page = route.page;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <LayoutPage>
                  <Page />
                </LayoutPage>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
