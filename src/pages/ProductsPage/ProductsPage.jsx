import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";

const ProductPage = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <CardComponent />
    </div>
  );
};

export default ProductPage;
