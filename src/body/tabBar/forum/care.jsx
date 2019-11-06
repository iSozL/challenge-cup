import React from "react";
import { Card, Icon, Button } from "antd";
class CarePost extends React.Component {
  render() {
    const carePost = [
      {
        avater: require("../../../assets/images/avater2.jpeg"),
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        avater: require("../../../assets/images/avater2.jpeg"),
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        avater: require("../../../assets/images/avater2.jpeg"),
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        avater: require("../../../assets/images/avater2.jpeg"),
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        avater: require("../../../assets/images/avater2.jpeg"),
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        avater: require("../../../assets/images/avater2.jpeg"),
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      }
    ];
    return (
      <div>
        {carePost.map((item, index) => (
          <Card style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img
                  src={require("../../../assets/images/avater.jpeg")}
                  style={{ width: "60px", height: "60px", marginRight: "5px" }}
                  alt="avater"
                />
                <div>
                  <div>昵称</div>
                  <div>xx回答 xx关注者</div>
                </div>
              </div>
              <div>
                <Icon type="plus-circle" /> 关注他 / 她
              </div>
            </div>

            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
              }}
            >
              <div style={{ flexGrow: 0 }}>
                <Card
                  cover={<img alt="avater" src={item.avater} />}
                  style={{ width: 150, height: 150 }}
                ></Card>
              </div>
              <div style={{ flexGrow: 1 }}>
                <Card style={{ height: "100%" }}>
                  <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {item.title}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {item.subtitle}
                    </div>
                    <Button>阅读全文</Button>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}
class Care extends React.Component {
  render() {
    return (
      <div>
        <CarePost />
      </div>
    );
  }
}
export default Care;
