import React from "react";
import { Card } from "antd";
import "./index.css";
function Limit() {
  const limitData = [
    {
      name: "XXXXX试剂",
      price: "99￥",
      img: require("../../../assets/images/promotion3.png")
    },
    {
      name: "XXXXX试剂",
      price: "99￥",
      img: require("../../../assets/images/promotion3.png")
    },
    {
      name: "XXXXX试剂",
      price: "99￥",
      img: require("../../../assets/images/promotion3.png")
    },
    {
      name: "XXXXX试剂",
      price: "99￥",
      img: require("../../../assets/images/promotion3.png")
    },
    {
      name: "XXXXX试剂",
      price: "99￥",
      img: require("../../../assets/images/promotion3.png")
    },
    {
      name: "XXXXX试剂",
      price: "99￥",
      img: require("../../../assets/images/promotion3.png")
    },
  ];
  return (
    <Card style={{ marginTop: "20px" }}>
      <div className="king-container">
        <div style={{ fontSize: "18px", borderBottom: "6px solid orange" }}>
          限量促销
        </div>
        <div
          style={{ background: "orange", width: "120px", height: "2px" }}
        ></div>
        <div className="limit-product">
          {limitData.map((item, index) => (
            <Card key={index} style={{width: 250, margin: "20px 20px 0 0"}}>
              <img alt="limitProductionPhoto" src={item.img} style={{width: "200px"}} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div>{item.name}</div>
                <div style={{ color: "orange" }}>{item.price}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
export default Limit;
