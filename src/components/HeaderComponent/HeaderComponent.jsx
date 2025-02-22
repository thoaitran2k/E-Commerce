import React, { useState, useEffect } from "react";
import { Col, Drawer, Grid } from "antd";
import { WrapperHeader } from "./style";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { WrapperLogo } from "./style";
import { useNavigate, useLocation } from "react-router-dom";

const { useBreakpoint } = Grid;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  return (
    <div>
      <div
        style={{
          fontSize: screens.xs ? "14px" : "16px",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={() => setOpen(true)}
      >
        <MenuOutlined /> Menu
      </div>

      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CloseOutlined
              onClick={() => setOpen(false)}
              style={{
                cursor: "pointer",
                fontSize: screens.xs ? "16px" : "18px",
                marginLeft: "50px",
                height: screens.xs ? "2rem" : "5.3rem",
              }}
            />
            <span
              onClick={() => setOpen(false)}
              style={{
                cursor: "pointer",
                fontSize: screens.xs ? "14px" : "16px",
              }}
            >
              Đóng
            </span>
          </div>
        }
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={null}
        width={screens.xs ? "80%" : "300px"}
      >
        <ul
          style={{
            listStyle: "none",
            padding: screens.xs ? "10px" : "20px",
            fontSize: screens.xs ? "16px" : "18px",
          }}
        >
          {[
            "Quà tặng",
            "Sản phẩm mới",
            "Túi và Phụ kiện bằng da",
            "Đồ Nữ",
            "Đồ Nam",
            "Trang sức",
          ].map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                marginLeft: screens.xs ? "10px" : "30px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

const HeaderComponent = () => {
  const screens = useBreakpoint();
  const location = useLocation();
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div style={{ height: screens.xs ? "4rem" : "7rem" }}>
      {" "}
      <WrapperHeader>
        <Col style={{ textAlign: "center" }} span={screens.xs ? 4 : 2}>
          <Sidebar />
        </Col>
        <Col style={{ textAlign: "center" }} span={screens.xs ? 0 : 2}>
          col-8
        </Col>
        <Col span={screens.xs ? 16 : 16} style={{ textAlign: "center" }}>
          <div
            onClick={handleLogoClick}
            style={{
              cursor:
                isAtTop && location.pathname === "/" ? "default" : "pointer",
              transition: "opacity 0.3s",
            }}
          >
            <WrapperLogo>LOGO</WrapperLogo>
          </div>
        </Col>
        <Col style={{ textAlign: "center" }} span={screens.xs ? 0 : 2}>
          col-8
        </Col>
        <Col style={{ textAlign: "center" }} span={screens.xs ? 4 : 2}>
          col-8
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
