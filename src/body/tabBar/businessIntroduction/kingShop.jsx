import React from "react";
import { Card } from "antd";
import "./index.css";
function ProductDetail() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        width: "160px",
        border: "1px solid gray"
      }}
    >
      <img
        alt="failed"
        style={{ width: "100px" }}
        src={require("../../../assets/images/promotion1.png")}
      />
      <div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>牛血浆</div>
        <div style={{ color: "orange" }}>活动价</div>
        <div style={{ color: "orange", marginBottom: "5px" }}>500</div>
        <div style={{ textDecoration: "line-through" }}>650</div>
      </div>
    </div>
  );
}
function KingProduct() {
  return (
    <div>
      <Card style={{ width: "350px", background: "#e8e8e8" }}>
        <div style={{ fontSize: "18px" }}>江西XX有限公司</div>
        <div style={{ color: "orange" }}>3天折扣,快来抢购</div>
        <div style={{ color: "orange" }}>2019/11/11 - 2019/12/01</div>
      </Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ProductDetail />
      <ProductDetail />
      </div>
    </div>
  );
}
function KingShop() {
  return (
    <Card style={{ marginTop: "20px" }}>
      <div className="king-container">
        <div style={{ fontSize: "18px", borderBottom: "6px solid orange" }}>
          王牌商家
        </div>
        <div
          style={{ background: "orange", width: "120px", height: "2px" }}
        ></div>
        <div
          style={{
            marginTop: "20px",
            width: "80%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <KingProduct />
          <KingProduct />
        </div>
      </div>
    </Card>
  );
}
export default KingShop;
