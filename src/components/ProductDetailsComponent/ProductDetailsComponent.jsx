import { Row, Col, Image, InputNumber } from "antd";
import React, { useState } from "react";
import imageProduct from "../../assets/aonam.jpg";
import imageSmallProduct from "../../assets/vi.jpg";
import { PlusOutlined, StarFilled, MinusOutlined } from "@ant-design/icons";
import {
  WrapperStyleImageSmall,
  WrapperStyleImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperStylePriceProduct,
  WrapperStylePriceTextProduct,
  WrapperAdressProduct,
  WrapperQualityProduct,
} from "./style";

const ProductDetailsComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10)); // Giới hạn max = số lượng id sản phẩm có trong database(tạm thời gán = 10)
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); // Giới hạn min luôn bằng 1
  };

  return (
    <Row style={{ padding: "16px", background: "white" }}>
      <Col span={10}>
        <Image
          style={{ width: "400px" }}
          src={imageProduct}
          alt="image product"
          preview={false}
        />
        <Row
          style={{
            borderTop: "3px solid #ccc",
            width: "400px",
            display: "flex",
            flexDirection: "row",
            background: "#ccc",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <WrapperStyleImage span={4} key={index}>
              <WrapperStyleImageSmall
                src={imageSmallProduct}
                alt="image small product"
                preview={false}
              />
            </WrapperStyleImage>
          ))}
        </Row>
      </Col>

      <Col span={14}>
        <WrapperStyleNameProduct>
          Áo nam - Thương hiệu thời trang cao cấp - Được làm từ sợi bông mềm,
          dịu, co giãn
        </WrapperStyleNameProduct>

        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>

          <WrapperStylePriceProduct>
            <WrapperStylePriceTextProduct>
              200.000 VNĐ
            </WrapperStylePriceTextProduct>
          </WrapperStylePriceProduct>

          <WrapperAdressProduct>
            <span>Giao đến </span>
            <span className="address">
              KP6, P. Linh Trung, TP Thủ Đức, TP.HCM
            </span>{" "}
            -<span className="change-address"> Đổi địa chỉ</span>
          </WrapperAdressProduct>

          <WrapperQualityProduct>
            <br />
            <div style={{ fontWeight: "500", fontSize: "25px" }}>Số lượng</div>
            <br />
            <div
              style={{
                display: "flex",
                width: "fit-content",
                flexDirection: "row",
                border: "2px solid #000",
                alignItems: "center",
                padding: "5px",
                borderRadius: "4px",
              }}
            >
              {/* Nút giảm số lượng */}
              <MinusOutlined
                onClick={decreaseQuantity}
                style={{
                  fontSize: "16px",
                  padding: "5px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              />

              {/* Input số lượng */}
              <span
                style={{
                  width: "50px",
                  textAlign: "center",
                  border: "none",
                }}
              >
                {quantity}
              </span>

              {/* Nút tăng số lượng */}
              <PlusOutlined
                onClick={increaseQuantity}
                style={{
                  fontSize: "16px",
                  padding: "5px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              />
            </div>
          </WrapperQualityProduct>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
