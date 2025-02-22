import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 5px;
  background-color: #ece9df;
  height: 100%;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 8.7rem;
`;

export const WrapperLogo = styled.span`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;
