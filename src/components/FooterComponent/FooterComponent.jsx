import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Typography, Space } from "antd";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const FooterComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);

  // Xác định các trang có banner cần cuộn lên đầu
  const isBannerPage = ["/", "/products", "/order"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm xử lý cuộn lên đầu khi click vào link
  const handleScrollToTop = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <SectionTitle>Hỗ trợ khách hàng</SectionTitle>
            <FooterText>Liên hệ: support@website.com</FooterText>
            <FooterText>Hotline: 1800-1234</FooterText>
          </Col>

          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <SectionTitle>Liên kết hữu ích</SectionTitle>
            <FooterText>
              <StyledLink onClick={() => handleScrollToTop("/")}>
                Trang chủ
              </StyledLink>
            </FooterText>
            <FooterText>
              <StyledLink onClick={() => handleScrollToTop("/products")}>
                Sản phẩm
              </StyledLink>
            </FooterText>
            <FooterText>
              <StyledLink onClick={() => handleScrollToTop("/order")}>
                Đặt hàng
              </StyledLink>
            </FooterText>
            <FooterText>Chính sách bảo mật</FooterText>
            <FooterText>Điều khoản dịch vụ</FooterText>
            <FooterText>FAQ</FooterText>
          </Col>

          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <SectionTitle>Liên hệ với chúng tôi</SectionTitle>
            <FooterText>Địa chỉ: 123 Đường ABC, TP.HCM</FooterText>
            <FooterText>Email: info@website.com</FooterText>
          </Col>

          <Col xs={24} sm={12} md={6} lg={6} xl={6}>
            <SectionTitle>Về chúng tôi</SectionTitle>
            <FooterText>
              Chúng tôi chuyên cung cấp các sản phẩm thời trang cao cấp cho mọi
              đối tượng.
            </FooterText>
            <Space size="large" direction="horizontal">
              <IconContainer>
                <FacebookOutlined />
              </IconContainer>
              <IconContainer>
                <InstagramOutlined />
              </IconContainer>
              <IconContainer>
                <TwitterOutlined />
              </IconContainer>
              <IconContainer>
                <LinkedinOutlined />
              </IconContainer>
            </Space>
          </Col>
        </Row>
      </FooterContent>

      <FooterBottom>
        <Text style={{ color: "white" }}>© 2025 Website Project 2 ©</Text>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default FooterComponent;

const FooterWrapper = styled.div`
  width: 100%;
  background-color: rgb(78, 78, 64);
  color: white;
  padding: 20px 10px;
  font-family: "Arial";
  position: relative;
`;

const FooterContent = styled.div`
  padding: 10px;
  max-width: 100%;
  margin: 0 250px;
`;

const SectionTitle = styled(Title).attrs({ as: "h3" })`
  font-size: 26px;
  color: rgb(215, 238, 6);
  margin-bottom: 10px;
  font-weight: 400;
`;

const FooterText = styled(Text)`
  display: block;
  color: #b8b8b8;
  margin-bottom: 10px;
  font-size: 14px;
  max-width: 300px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  color: #d4af37;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  background-color: #121212;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

const StyledLink = styled.span`
  color: #d4af37;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
