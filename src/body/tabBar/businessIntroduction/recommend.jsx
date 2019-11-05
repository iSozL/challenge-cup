import React from "react";
import { Card, Input, Icon, Button } from "antd";
import "./index.css";
const { Meta } = Card;
class Recommend extends React.Component {
  render() {
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
      }
    ];
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img
          src={require("../../../assets/images/recommend1.png")}
          style={{ width: "auto" }}
        />
        <div style={{ fontWeight: "bold", margin: "10px 0 5px 0" }}>
          立即预约,最快三分钟响应
        </div>
        <div style={{ fontSize: "12px", fontWeight: "normal" }}>
          坐等私人助理免费梳理需求
        </div>
        <Card style={{marginTop: '20px'}}>
          <div style={{ fontSize: "11px", fontWeight: "normal" }}>
            张** 13****12236 3分钟前预约
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: "normal",
              marginBottom: "10px"
            }}
          >
            张** 13****12236 3分钟前预约
          </div>
          <Input
            placeholder="您的姓名"
            addonBefore={<Icon type="user" />}
            style={{ marginBottom: "10px" }}
          />
          <Input
            placeholder="您的电话"
            addonBefore={<Icon type="phone" />}
            style={{ marginBottom: "10px" }}
          />
          <Input
            placeholder="您的需求"
            addonBefore={<Icon type="snippets" />}
            style={{ marginBottom: "10px" }}
          />
          <Button
            style={{ background: "orange", color: "#ffffff", width: "auto" }}
          >
            免费预约
          </Button>
          <div className="tags">
            <span>
              <Icon type="fire" style={{ color: "orange" }} />
              极速
            </span>
            <span>
              <Icon type="heart" style={{ color: "orange" }} />
              省心
            </span>
            <span>
              <Icon type="safety-certificate" style={{ color: "orange" }} />
              保障
            </span>
          </div>
          <div className="reply">最快3分钟回复</div>
        </Card>
        {promoteData.map((item, index) => (
            <Card
              key={index}
              style={{ width: 200, marginTop: '20px' }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.title} description={item.company} />
            </Card>
          ))}
      </div>
    );
  }
}
export default Recommend;
