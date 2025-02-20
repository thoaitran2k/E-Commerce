import React from 'react'

const HeaderComponent = () => {
    return (
      <div
        style={{
          backgroundColor: "#87CEEB",
          width: "100%",
          height: "5rem",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Hiệu ứng đổ bóng nhẹ
          zIndex: 1000, // Đảm bảo header luôn trên top
        }}
      >
        HeaderComponent
      </div>
    );
  };
  
  export default HeaderComponent;
  


