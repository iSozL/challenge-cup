import React from "react";
// import { Card } from "antd";
import { Card, Avatar } from 'antd';
import "./index.css";

const { Meta } = Card;

function KingProduct(props) {
  console.log(props)
  return (
    <div>
      <Card
        style={{ width: 300, height: 350 }}
        cover={
          props.img ? <img
          alt="example"
          src={props.img}
        /> : ""
        }
      >
        <Meta
          title={props.name}
          description="This is the description"
        />
      </Card>
    </div>
  );
}
function KingShop() {
  return (
    <Card style={{ marginTop: "20px" }}>
      <div className="king-container">
        <div
          style={{
            marginTop: "20px",
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: 'wrap'
          }}
        >
          <KingProduct name="实验操作手册" img={require('../../../assets/images/111.png')} />
          <KingProduct name="今日看点" />
          <KingProduct name="临床诊断案例" img={require('../../../assets/images/222.png')} />
          <KingProduct />
          <KingProduct name="生活小贴士" img={require('../../../assets/images/333.png')} />
          <KingProduct />
        </div>
      </div>
    </Card>
  );
}
export default KingShop;
