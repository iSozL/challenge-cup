import React from "react";
import { Card, Icon} from "antd";
import "./index.css";
const { Meta } = Card;
function Promote() {
  const promoteData = [
    {
      img: require("../../../assets/images/1.png"),
      title: "江西某某有限公司",
      company: "公司 江西南昌"
    },
    {
      img: require("../../../assets/images/1.png"),
      title: "江西某某有限公司",
      company: "公司 江西南昌"
    },
    {
      img: require("../../../assets/images/1.png"),
      title: "江西某某有限公司",
      company: "公司 江西南昌"
    },
    {
      img: require("../../../assets/images/1.png"),
      title: "江西某某有限公司",
      company: "公司 江西南昌"
    },
    {
      img: require("../../../assets/images/1.png"),
      title: "江西某某有限公司",
      company: "公司 江西南昌"
    }
  ];
  return (
    <div className="promote-container">
      <Card
        style={{
          width: 150,
          background: "#d5d3d5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon type="like" style={{ fontSize: "40px", marginBottom: "20px" }} />
        <div>设绘文化</div>
        <div>专业优选</div>
      </Card>
      {promoteData.map((item, index) => (
        <Card
          key={index}
          style={{ width: 200 }}
          cover={<img alt="example" src={item.img} />}
        >
          <Meta title={item.title} description={item.company} />
        </Card>
      ))}
    </div>
  );
}
export default Promote;
