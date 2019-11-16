import React from "react";
import "./login.css";
import { Card, Input, Button } from "antd";
class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10%",
          }}
        >
          <Card
            style={{ display: "flex", justifyContent: "center", width: "25%", marginTop: "15%" }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "30px"
              }}
            >
              登录
            </div>
            <Input
              placeholder="手机号/用户名"
              style={{ marginBottom: "20px" }}
            />
            <Input
              placeholder="密码"
              type="password"
              style={{ marginBottom: "20px" }}
            />
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Button type="primary">
                登录
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
export default Login;
