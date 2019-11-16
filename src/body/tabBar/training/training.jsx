import React from "react";
import { Layout, Card } from "antd";
import IndexPhoto from "../index/headerBar/indexPhoto";
import CardContainer from "../../../components/cardContainer/index";
const { Content, Sider } = Layout;
class Training extends React.Component {
  render() {
    const photoList = [
      {
        name: require("../../../assets/images/t1.png")
      }
    ];
    const jpClass = [
      {
        img: require("../../../assets/images/sy1.png")
      },
      {
        img: require("../../../assets/images/sy2.png")
      },
      {
        img: require("../../../assets/images/sy3.png")
      }
    ];
    const rmClass = [
      {
        img: require("../../../assets/images/sy1.png"),
        message:
          "分子生物学的边上：RNA的提取，c-DNA的合成，细菌的培养，质粒DNA提取，紫外吸收法测定核酸浓度与纯度，水平式琼脂糖凝胶电泳法测DNA"
      },
      {
        img: require("../../../assets/images/sy2.png"),
        message:
          "免疫学：凝集反应，沉淀反应，补体溶血试验，酶免疫技术，ELISA 间接法测抗体，免疫胶体金技术，斑点免疫层析试验"
      },
      {
        img: require("../../../assets/images/sy3.png"),
        message:
          "蛋白质及氨基酸的呈色反应，蛋白质的等电点测定，植物DNA的提取与测定，双缩脲法测定蛋白质含量，凝胶层析法分离蛋白质，离心技术，血清总胆固醇测定，血清脂蛋白琼脂糖凝胶电泳，SDS-PAGE测定蛋白质分子量"
      },
      {
        img: require("../../../assets/images/sy4.png"),
        message: "生物信息学：多序列比对分析，进化分析，基因预测，蛋白质分析"
      }
    ];
    return (
      <div>
        <Layout>
          <Content>
            <IndexPhoto photoArray={photoList} />
          </Content>
          <Sider width={270}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={require("../../../assets/images/t2.png")}
            />
          </Sider>
        </Layout>
        <CardContainer name="精品课程" flexType="space-between">
          {jpClass.map((item, index) => (
            <Card style={{ background: "#f0ecec", width: 300 }}>
              <img
                style={{ height: "100px", width: "auto", marginBottom: "20px" }}
                src={item.img}
              />
              <div style={{ textAlign: "center" }}>点击了解课程</div>
            </Card>
          ))}
        </CardContainer>
        <CardContainer name="热门课程">
          {rmClass.map(item => (
            <Card>
              <Layout>
                <Content>
                  <img src={item.img} />
                  <div style={{ textAlign: "center" }}>》》更多</div>
                </Content>
                <Sider style={{ background: "#f0ecec" }}>{item.message}</Sider>
              </Layout>
            </Card>
          ))}
        </CardContainer>
        <CardContainer name="特色教师" flexType="space-between">
          <Card
            style={{width: 240}}
            cover={
              <img
                style={{height: 300}}
                alt="example"
                src={require('../../../assets/images/te1.jpg')}
              />
            }
          >
            <div style={{ textAlign: "center" }}>了解更多</div>
          </Card>
          <Card
            style={{width: 240}}
            cover={
              <img
                style={{height: 300}}
                alt="example"
                src={require('../../../assets/images/te1.jpg')}
              />
            }
          >
            <div style={{ textAlign: "center" }}>了解更多</div>
          </Card>
          <Card
            style={{width: 240}}
            cover={
              <img
                style={{height: 300}}
                alt="example"
                src={require('../../../assets/images/te1.jpg')}
              />
            }
          >
            <div style={{ textAlign: "center" }}>了解更多</div>
          </Card>
          <Card
            style={{width: 240}}
            cover={
              <img
                style={{height: 300}}
                alt="example"
                src={require('../../../assets/images/te1.jpg')}
              />
            }
          >
            <div style={{ textAlign: "center" }}>了解更多</div>
          </Card>
        </CardContainer>
      </div>
    );
  }
}
export default Training;
