import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

// Styled Components
const LayoutContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px;
  min-height: 50vh;
`;
