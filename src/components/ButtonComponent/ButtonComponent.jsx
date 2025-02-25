import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  className,
  textButton,
  type,
  size,
  styleTextButton,
  styleButton,
  ...rests
}) => {
  return (
    <Button
      className={className}
      type={type}
      size={size}
      style={styleButton}
      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
