import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const LayoutComponent = route.isShowHeader
              ? Layout
              : React.Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <LayoutComponent>
                    <Page />
                  </LayoutComponent>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
