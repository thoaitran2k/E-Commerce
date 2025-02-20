import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 5px;
  background-color: #ece9df;
  height: 100%;
  display: flex;
  align-items: center;

  position: fixed; /* Cố định header */
  top: 0; /* Đặt ở trên cùng */
  left: 0;
  width: 100%; /* Chiếm toàn bộ chiều rộng */
  z-index: 1000; /* Đảm bảo header hiển thị trên các phần khác */
  height: 7rem;
`;

export const WrapperLogo = styled.span`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;
