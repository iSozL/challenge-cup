import React from "react";
import { Layout, Card } from "antd";
import IndexPhoto from "../index/headerBar/indexPhoto";
import SiderPhoto from "../index/headerBar/siderPhoto";
import CardContainer from "../../../components/cardContainer/index";
import { Item } from "rc-menu";
const { Meta } = Card;
const { Sider, Content } = Layout;
class Scientice extends React.Component {
  render() {
    const photoArray = [{ name: require("../../../assets/images/s1.png") }];
    const testData = [
      {
        img: require("../../../assets/images/sy1.png"),
        title: "XXXXX",
        description: "xxxxxxxx"
      },
      {
        img: require("../../../assets/images/sy2.png"),
        title: "XXXXX",
        description: "xxxxxxxx"
      },
      {
        img: require("../../../assets/images/sy3.png"),
        title: "XXXXX",
        description: "xxxxxxxx"
      },
      {
        img: require("../../../assets/images/sy4.png"),
        title: "XXXXX",
        description: "xxxxxxxx"
      },
      {
        img: require("../../../assets/images/sy5.png"),
        title: "XXXXX",
        description: "xxxxxxxx"
      },
      {
        img: require("../../../assets/images/sy6.png"),
        title: "XXXXX",
        description: "xxxxxxxx"
      }
    ];

    const siderPhoto = [
      {
        name: require("../../../assets/images/s2.png")
      },
      {
        name: require("../../../assets/images/s3.png")
      },
      {
        name: require("../../../assets/images/s4.png")
      }
    ];
    return (
      <div>
        <Layout>
          <Content>
            <IndexPhoto photoArray={photoArray} />
          </Content>
          <Sider width={270}>
            <SiderPhoto siderPhoto={siderPhoto} />
          </Sider>
        </Layout>
        <Card style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "20px" }}>基础实验</div>
          <div style={{ margin: "20px 0 0 20px" }}>
            <div style={{ marginTop: "20px" }}>
              热门实验: 蛋白质免疫印迹 / 蛋白质定量实验 / 聚合酶链式反应 /
              细胞冻存与复苏 / 酶联免疫吸附实验
            </div>
            <div style={{ marginTop: "20px" }}>
              细胞实验: 细胞培养 / 细胞计数法测定生长曲线 / MTT法测定生长曲线 /
              细胞凋亡检测 / Trnswell / 转化感受态细菌 / 质粒提取
            </div>
            <div style={{ marginTop: "20px" }}>
              动物实验: 转基因小鼠制备实验 / 动物DNA提取实验 /
              新生大鼠心肌细胞原代培养实验
            </div>
          </div>
        </Card>
        <CardContainer name="常见科学实验" flexType="space-between">
          {testData.map((item, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 240, margin: "20px 20px 0 20px" }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          ))}
        </CardContainer>
        <CardContainer name="科研快讯" flexType="space-between">
          <Card
            hoverable
            style={{ width: 240, height: 300, margin: "20px 10px 0 20px" }}
            cover={<img src={require("../../../assets/images/ky2.png")} />}
          >
            <div style={{ fontSize: "12px" }}>
              中国科研国际合作程度持续提升——访中国工程院...-清华大学新闻网
              德政府报告：德国教育和科研国际合作不断加深 上海热线
              韩国国防科学研究所发生爆炸事故 致1死5伤 中国法院网
              受糖尿病血管并发症影响最大的女性 …..生物帮
            </div>
          </Card>
          <Card
            hoverable
            style={{ width: 240, height: 300, margin: "20px 10px 0 20px" }}
            cover={<img src={require("../../../assets/images/ky1.png")} />}
          >
            <div style={{ fontSize: "12px" }}>
              化疗耐药三阴性乳腺癌中的凋亡蛋白----BIO1000.COM
              癌症干细胞的新生物标记------- BIO1000.COM
            </div>
          </Card>
        </CardContainer>
        <CardContainer name="科研专题" flexType="space-around">
          <Card
            hoverable
            style={{ width: 240, height: 300, margin: "20px 10px 0 20px" }}
          ></Card>
          <Card
            hoverable
            style={{ width: 240, height: 300, margin: "20px 10px 0 20px" }}
          ></Card>
          <Card
            hoverable
            style={{ width: 240, height: 300, margin: "20px 10px 0 20px" }}
          ></Card>
          <Card
            hoverable
            style={{ width: 240, height: 300, margin: "20px 10px 0 20px" }}
          ></Card>
        </CardContainer>
      </div>
    );
  }
}
export default Scientice;
