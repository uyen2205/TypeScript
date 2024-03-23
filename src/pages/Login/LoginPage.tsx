import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Xử lý việc đăng nhập ở đây
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };

  return (
    <div className="login">
      {/* <h1>Trang đăng nhập</h1> */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
