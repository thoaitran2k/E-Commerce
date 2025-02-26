import { useState } from "react";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

export default function SignInPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [code, setCode] = useState();
  const [vertification, setVertification] = useState();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setIsForgot(false);
    setStep(1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Đăng nhập thành công!");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
      }
      alert("Đăng ký thành công!");
    }
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <Title>
          {isLogin ? (isForgot ? "Quên mật khẩu" : "Đăng Nhập") : "Đăng Ký"}
        </Title>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            !isForgot ? (
              <div>
                {" "}
                <InputWrapper>
                  <MailOutlined />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
                <InputWrapper>
                  <LockOutlined />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <>
                    <InputWrapper>
                      <MailOutlined />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </InputWrapper>
                    <StyledButton
                      onClick={handleNext}
                      type="button"
                      style={{ display: "flex", justifySelf: "flex-end" }}
                    >
                      Tiếp theo
                    </StyledButton>
                  </>
                )}

                {step === 2 && (
                  <>
                    <InputWrapper>
                      <Input
                        type="text"
                        name="verificationCode"
                        placeholder="Mã xác nhận"
                        onChange={(e) => setVertification(e.target.value)}
                        required
                      />
                    </InputWrapper>
                    <ButtonGroup>
                      <StyledButton type="button" onClick={handleBack}>
                        Quay lại
                      </StyledButton>
                      <StyledButton type="button" onClick={handleNext}>
                        Tiếp theo
                      </StyledButton>
                    </ButtonGroup>
                  </>
                )}

                {step === 3 && (
                  <>
                    <InputWrapper>
                      <LockOutlined />
                      <Input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu mới"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <LockOutlined />
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Xác nhận mật khẩu"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </InputWrapper>
                  </>
                )}
              </>
            )
          ) : (
            <>
              {step === 1 && (
                <>
                  <InputWrapper>
                    <MailOutlined />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputWrapper>
                  <StyledButton
                    onClick={handleNext}
                    type="button"
                    style={{ display: "flex", justifySelf: "flex-end" }}
                  >
                    Tiếp theo
                  </StyledButton>
                </>
              )}

              {step === 2 && (
                <>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="verificationCode"
                      placeholder="Mã xác nhận"
                      onChange={(e) => setVertification(e.target.value)}
                      required
                    />
                  </InputWrapper>
                  <ButtonGroup>
                    <StyledButton type="button" onClick={handleBack}>
                      Quay lại
                    </StyledButton>
                    <StyledButton type="button" onClick={handleNext}>
                      Tiếp theo
                    </StyledButton>
                  </ButtonGroup>
                </>
              )}

              {step === 3 && (
                <>
                  <InputWrapper>
                    <UserOutlined />
                    <Input
                      type="text"
                      name="username"
                      placeholder="Tên người dùng"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <PhoneOutlined />
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <CalendarOutlined />
                    <Input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <LockOutlined />
                    <Input
                      type="password"
                      name="password"
                      placeholder="Mật khẩu"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <LockOutlined />
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Xác nhận mật khẩu"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </InputWrapper>
                </>
              )}
            </>
          )}
          {isForgot ? (
            <ToggleButton
              type="button"
              onClick={() => {
                setIsForgot(false);
                setStep(1);
              }}
            >
              {" "}
              Quay lại đăng nhập
            </ToggleButton>
          ) : (
            <ToggleButton
              type="button"
              onClick={() => {
                setIsForgot(true);
                setStep(1);
              }}
            >
              {" "}
              Quên mật khẩu?
            </ToggleButton>
          )}

          {isForgot ? (
            step === 3 ? (
              <SubmitButton type="button">Cập nhập mật khẩu</SubmitButton>
            ) : (
              " "
            )
          ) : isLogin ? (
            <SubmitButton type="submit">Đăng nhập</SubmitButton>
          ) : step === 3 ? (
            <SubmitButton type="submit">Đăng ký</SubmitButton>
          ) : (
            ""
          )}
        </form>
        <ToggleText>
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
          <ToggleButton onClick={toggleMode}>
            {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
          </ToggleButton>
        </ToggleText>
      </FormWrapper>
    </LoginContainer>
  );
}

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 30%;
  height: 60%;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  font-size: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ced4da;
  padding: 12px;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  margin: 10px;
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
  font-size: 16px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 12px 8px;
  border-radius: 5px;
  border: 1px solid #0b74e5;
  background: none;
  cursor: pointer;
  color: #0b74e5;
`;
