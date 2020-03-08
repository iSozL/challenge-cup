import React from "react";
import { Card, PageHeader } from "antd";
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
      <div>
        <PageHeader title="精选内容" />
        <div style={{width: "100%", display: 'flex', justifyContent: 'space-around'}}>
          <img src={require('../../../assets/images/11.png')} alt="" style={{height: "400px"}} />
          <img src={require('../../../assets/images/22.png')} alt="" style={{height: "400px"}} />
          <img src={require('../../../assets/images/33.png')} alt="" style={{height: "400px"}} />
        </div>
      </div>
    </Card>
  );
}
export default Limit;
