import React from "react";
import { Layout, Card } from "antd";
import IndexPhoto from "../index/headerBar/indexPhoto";
import SiderPhoto from "../index/headerBar/siderPhoto";
import CardContainer from "../../../components/cardContainer/index";
const { Content, Sider } = Layout;
class Recruitment extends React.Component {
  render() {
    const companys = [
      {
        name: "test",
        img: require("../../../assets/images/company1.jpg")
      },
      {
        name: "test",
        img: require("../../../assets/images/company1.jpg")
      },
      {
        name: "test",
        img: require("../../../assets/images/company1.jpg")
      },
      {
        name: "test",
        img: require("../../../assets/images/company1.jpg")
      },
      {
        name: "test",
        img: require("../../../assets/images/company1.jpg")
      }
    ];
    return (
      <div>
        <Layout>
          <Content>
            <IndexPhoto />
          </Content>
          <Sider width={270}>
            <SiderPhoto />
          </Sider>
        </Layout>
        <Card style={{ marginTop: "20px" }}>
          <div style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}>
            紧急招聘
          </div>
          <div
            style={{
              fontWeight: "bold",
              color: "red",
              fontSize: "24px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div>XX实验室诚招英才</div>
          </div>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            XX实验室诚招英才
          </div>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            XX实验室诚招实习生(包宿)
          </div>
        </Card>
        <CardContainer name="热门职位" flexType="space-around">
          <Card
            style={{
              background: "#e8e8e8",
              width: 500,
              height: 200,
              marginTop: "20px"
            }}
          >
            xxxxx
          </Card>
          <Card
            style={{
              background: "#e8e8e8",
              width: 500,
              height: 200,
              marginTop: "20px"
            }}
          >
            xxxxx
          </Card>
          <Card
            style={{
              background: "#e8e8e8",
              width: 500,
              height: 200,
              marginTop: "20px"
            }}
          >
            xxxxxxxxxxxxxx
          </Card>
          <Card
            style={{
              background: "#e8e8e8",
              width: 500,
              height: 200,
              marginTop: "20px"
            }}
          >
            xxxxx
          </Card>
        </CardContainer>
        <CardContainer name="优质单位" flexType="flex-start">
          {companys.map((item, index) => (
            <Card key={index} style={{ width: 240, margin: "20px 20px 0 20px" }}>
              <img
                src={item.img}
                style={{ width: "200px" }}
                alt="failed"
              />
              <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>{item.name}</div>
            </Card>
          ))}
        </CardContainer>
      </div>
    );
  }
}
export default Recruitment;
