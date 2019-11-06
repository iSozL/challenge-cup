import React from "react";
import { Button } from "antd";
import "./index.css";
function Advertise() {
  return (
    <div className="advertise-container">
      <div style={{ paddingLeft: "60px" }}>
        <div style={{ color: "orangered", fontSize: "18px" }}>
          没有找到合适的服务商？立即预约试试？
        </div>
        <div>立即预约,让专家团队为你提供最佳操作方案</div>
      </div>
      <div style={{ paddingRight: "60px" }}>
        <Button style={{ color: "#ffffff", background: "orangered", width: 200 }}>
          立即预约
        </Button>
      </div>
    </div>
  );
}
export default Advertise;
