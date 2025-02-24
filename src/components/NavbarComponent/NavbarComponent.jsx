import React from "react";
import { WrapperLableText } from "./style";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <h3>{option}</h3>;
        });
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLableText></WrapperLableText>
      {renderContent("text", [
        "Đồ Nam",
        "Đồ Nữ",
        "Trang sức Nữ",
        "Đồng hồ",
        "Ví da",
        "Túi xách",
      ])}
    </div>
  );
};

export default NavbarComponent;
