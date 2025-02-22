import React, { useState } from "react";
import styled from "styled-components";
import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Home() {
  const [collections] = useState([
    { category: "Áo nam", image: "/src/assets/aonamCol.png" },
    { category: "Quần nam", image: "/src/assets/quannamCol.png" },
    { category: "Đồng hồ", image: "/src/assets/watchCol.png" },
    { category: "Áo nữ", image: "/src/assets/aonuCol.png" },
    { category: "Quần nữ", image: "/src/assets/quannuCol.png" },
    { category: "Túi xách", image: "/src/assets/bagCol.png" },
    { category: "Trang sức", image: "/src/assets/trangsucCol.png" },
    { category: "Ví", image: "/src/assets/vi.png" },
  ]);

  return (
    <Container>
      <Title level={2} style={{ textAlign: "center" }}>
        Khách hàng luôn là ưu tiên của chúng tôi<br></br>
        Hãy lựa chọn theo sở thích của bạn!
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {collections.map((collection, index) => (
          <Col key={index} xs={12} sm={12} md={8} lg={6} xl={6}>
            <StyledLink to="/search" state={{ category: collection.category }}>
              <StyledCard
                hoverable
                cover={
                  <ProductImage
                    src={collection.image}
                    alt={collection.category}
                  />
                }
              >
                <CardTitle>{collection.category}</CardTitle>
              </StyledCard>
            </StyledLink>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
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
  background: linear-gradient(135deg, #1c1c1c 40%, #d4af37 100%);
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
  object-fit: contain;
  max-height: 200px;
`;

const CardTitle = styled(Title)`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  color: white;
`;
