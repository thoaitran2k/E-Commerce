import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`;

const FullWidthWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <FullWidthWrapper>
        {childrenArray.filter(
          (child) =>
            child.type && child.type.styledComponentId === "ImageWrapper"
        )}
      </FullWidthWrapper>
      <LayoutWrapper>
        {childrenArray.filter(
          (child) =>
            !child.type || child.type.styledComponentId !== "ImageWrapper"
        )}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
