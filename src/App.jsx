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
import watchBannerImg from "/src/assets/ShopBanner.png";

// Component tự động cuộn lên đầu khi chuyển trang
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Mỗi lần đường dẫn thay đổi, cuộn lên đầu

  return null;
};

function App() {
  return (
    <AppContainer>
      <Router>
        <ScrollToTop />
        <HeaderComponent />
        <MainContent>
          {" "}
          {/* Bọc nội dung chính để đẩy footer xuống */}
          <RoutesWithBanner />
        </MainContent>
        <FooterComponent />
      </Router>
    </AppContainer>
  );
}

// Component điều hướng có kiểm tra để hiển thị banner đúng chỗ
const RoutesWithBanner = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Banner />}
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const LayoutComponent = route.isShowHeader ? Layout : React.Fragment;
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
      {isHomePage && <Banner />}
    </>
  );
};

// Component Banner
const Banner = () => (
  <ImageWrapper>
    <StyledImage src={watchBannerImg} alt="Watch Banner" />
  </ImageWrapper>
);

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgb(165, 152, 152), rgb(201, 174, 174));
`;

const MainContent = styled.main`
  flex: 1; /* Chiếm toàn bộ không gian còn lại, đẩy footer xuống */
`;

const ImageWrapper = styled.div`
  width: 90%;
  max-height: 70vh;
  // background-color: rgb(78, 78, 64);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 20px auto;
`;

const StyledImage = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  display: block;
`;
