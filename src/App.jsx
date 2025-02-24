import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Layout from "./components/Layout/Layout";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Router>
        <ScrollToTop />
        <HeaderComponent />
        <MainContent>
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
        </MainContent>
        <FooterComponent />
      </Router>
    </AppContainer>
  );
}

// Cuộn lên đầu khi đổi trang
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

export default App;

// CSS
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgb(165, 152, 152), rgb(201, 174, 174));
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 20px;
`;
