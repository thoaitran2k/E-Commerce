import React from "react";
import styled from "styled-components";
import { Row, Col, Typography, Space } from "antd";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Row gutter={[16, 16]} justify="center">
          {/* Section 2: Customer Service */}
          <Col xs={24} sm={12} md={6}>
            <SectionTitle>Hỗ trợ khách hàng</SectionTitle>
            <FooterText>Liên hệ: support@website.com</FooterText>
            <FooterText>Hotline: 1800-1234</FooterText>
          </Col>

          {/* Section 3: Useful Links */}
          <Col xs={24} sm={12} md={6}>
            <SectionTitle>Liên kết hữu ích</SectionTitle>
            <FooterText>
              <StyledLink to="/">Trang chủ</StyledLink>{" "}
              {/* Link đến trang Home */}
            </FooterText>
            <FooterText>
              <StyledLink to="/products">Sản phẩm</StyledLink>{" "}
              {/* Link đến trang Products */}
            </FooterText>
            <FooterText>
              <StyledLink to="/order">Đặt hàng</StyledLink>{" "}
              {/* Link đến trang Order */}
            </FooterText>
            <FooterText>Chính sách bảo mật</FooterText>
            <FooterText>Điều khoản dịch vụ</FooterText>
            <FooterText>FAQ</FooterText>
          </Col>

          {/* Section 4: Contact */}
          <Col xs={24} sm={12} md={6}>
            <SectionTitle>Liên hệ với chúng tôi</SectionTitle>
            <FooterText>Địa chỉ: 123 Đường ABC, TP.HCM</FooterText>
            <FooterText>Email: info@website.com</FooterText>
          </Col>

          <Col xs={24} sm={12} md={6}>
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
        <Text style={{ color: "white" }}>
          © 2025 Website - All Rights Reserved
        </Text>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default FooterComponent;

// Styled Components
const FooterWrapper = styled.div`
  background-color: rgb(78, 78, 64);
  color: white;
  padding: 20px 250px;
  font-family: "Arial";
`;

const FooterContent = styled.div`
  padding: 20px;
`;

const SectionTitle = styled(Title)`
  font-size: 18px;
  color: #d4af37;
  margin-bottom: 10px;
`;

const FooterText = styled(Text)`
  display: block;
  color: #b8b8b8;
  margin-bottom: 10px;
  font-size: 14px;
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

// Đảm bảo StyledLink được khai báo đúng trước khi sử dụng
const StyledLink = styled(Link)`
  color: #d4af37;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
