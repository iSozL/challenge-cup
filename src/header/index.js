import React from "react";
import { Button, Row, Col, Divider } from "antd";
import "./index.css";
function Header() {
  const func = ["登录", "注册", "个人中心"];
  return (
    <div>
      <div className="function">
        <Row gutter={22}>
          {func.map((item, index) => (
            <Col key={index} span={6}>
              <Button>{item}</Button>
            </Col>
          ))}
        </Row>
      </div>
      <div className="clearFloat"></div>
      <Divider className="test" />
    </div>
  );
}
export default Header;
