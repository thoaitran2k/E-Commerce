import React, { useState } from "react";
import styled from "styled-components";
import { Card, Row, Col, Typography, Image } from "antd";
import { Link } from "react-router-dom";
import watchBannerImg from "/src/assets/watchBanner.jpg";
import trangsucBannerImg from "/src/assets/trangsucBanner.jpg";
import watchCol from "/src/assets/watchCol.png";
import bagCol from "/src/assets/bagCol.png";
import aonamCol from "/src/assets/aonamCol.png";
import aonuCol from "/src/assets/aonuCol.png";
import quannuCol from "/src/assets/quannuCol.png";
import quannamCol from "/src/assets/quannamCol.png";
import trangsucCol from "/src/assets/trangsucCol.png";
import vi from "/src/assets/vi.png";

const { Title } = Typography;

export default function Home() {
  const [all_products] = useState([]);
  const [collections] = useState([
    { category: "Áo nam", image: aonamCol },
    { category: "Quần nam", image: quannamCol },
    { category: "Đồng hồ", image: watchCol },
    { category: "Áo nữ", image: aonuCol },
    { category: "Quần nữ", image: quannuCol },
    { category: "Túi xách", image: bagCol },
    { category: "Trang sức", image: trangsucCol },
    { category: "Ví", image: vi },
  ]);

  const filteredWatches = all_products.filter(product => product.category === "Đồng hồ").slice(0, 8);
  const filteredTrangSucs = all_products.filter(product => product.category === "Trang sức").slice(0, 8);

  return (
    <Container>
      {/* Danh mục sản phẩm */}
      <Row gutter={[16, 16]} justify="center">
        {collections.map((collection, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6} xl={4}>
            <StyledLink to="/search" state={{ category: collection.category }}>
              <StyledCard hoverable cover={<ProductImage src={collection.image} alt={collection.category} preview={false} />}>
                <CardTitle>{collection.category}</CardTitle>
              </StyledCard>
            </StyledLink>
          </Col>
        ))}
      </Row>

      {/* Banner nhỏ */}
      <ImageWrapper>
        <StyledImage src={watchBannerImg} alt="Watch Banner" preview={false} />
        <StyledImage src={trangsucBannerImg} alt="Trang sức Banner" preview={false} />
      </ImageWrapper>

      {/* Hiển thị sản phẩm "Đồng hồ" */}
      {filteredWatches.length > 0 && (
        <>
          <Title level={2}>Đồng hồ</Title>
          <Row gutter={[16, 16]} justify="center">
            {filteredWatches.map((product) => (
              <Col key={product.id} xs={12} sm={8} md={6} lg={6} xl={4}>
                <StyledLink to={`/product/${product.id}`}>
                <StyledCard
  hoverable
  cover={<ProductImage src={product.image} alt={product.name} />}
>
  <Card.Meta title={product.name} style={{ textAlign: "center", color: "white" }} />
</StyledCard>
                </StyledLink>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Hiển thị sản phẩm "Trang sức" */}
      {filteredTrangSucs.length > 0 && (
        <>
          <Title level={2}>Trang sức</Title>
          <Row gutter={[16, 16]} justify="center">
            {filteredTrangSucs.map((product) => (
              <Col key={product.id} xs={12} sm={8} md={6} lg={6} xl={4}>
                <StyledLink to={`/product/${product.id}`}>
                <StyledCard
  hoverable
  cover={<ProductImage src={product.image} alt={product.name} />}
>
  <Card.Meta title={product.name} style={{ textAlign: "center", color: "white" }} />
</StyledCard>
                </StyledLink>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  font-family: "Arial";
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* Sắp xếp theo chiều dọc */
  align-items: center;
  gap: 10px; /* Khoảng cách giữa hai ảnh */
  margin-bottom: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%; /* Chiều ngang cố định, luôn full */
  max-width: 800px; /* Đảm bảo không quá lớn */
  height: 400px; /* Đặt chiều cao cố định để ảnh đồng nhất */
  object-fit: cover; /* Giữ tỷ lệ mà không bị méo */
  border-radius: 10px; /* Bo góc nhẹ cho đẹp */
`;





const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;





const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #1c1c1c 40%, #d4af37 100%) !important;
  border-radius: 10px;
  color: white;
  transition: 0.3s;
  padding: 10px;

  &:hover {
    background: linear-gradient(135deg, #000000 40%, #c8a415 100%);
  }
`;





const ProductImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  max-height: 200px;
`;

const CardTitle = styled(Title)`
  text-align: center;
  font-size: 16px !important;
  font-weight: 500;
  margin-top: 10px;
  color: white;
`;





