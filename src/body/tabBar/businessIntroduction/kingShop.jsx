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
        />
        <div style={{marginTop: "20px"}}>
          {props.des}
        </div>
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
          <KingProduct name="实验操作手册" img={require('../../../assets/images/111.png')} des={
<div><p>离我最近:定位我附近的实验室</p>
<p>最新:A博导受邀入驻我平台</p>
<p>最热:江西省新型实验室标准入选名单}</p></div>}></KingProduct>
          <KingProduct name="今日看点" />
          <KingProduct name="临床诊断案例" img={require('../../../assets/images/222.png')} des={
            <div><p>核酸检测阴性不能排除新冠感染！</p>
            <p>长达十年直肠癌患者自述诊治经过，悔不当初。</p></div>
          } />
          <KingProduct />
          <KingProduct name="生活小贴士" img={require('../../../assets/images/333.png')} des={
            <div>
              <p>不想节食？怎么减肥？一招告诉你</p>
              <p>经常流鼻涕不见好，你以为只是感冒吗？</p>
              <p>想要预防冻疮，避免温度极速变化才是关键！</p>
            </div>
          } />
          <KingProduct />
        </div>
      </div>
    </Card>
  );
}
export default KingShop;
