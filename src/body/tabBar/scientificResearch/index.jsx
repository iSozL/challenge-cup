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
    const testData = [
      {
        img: require('../../../assets/images/promotion4.png'),
        title: 'XXXXX',
        description: 'xxxxxxxx'
      },
      {
        img: require('../../../assets/images/promotion4.png'),
        title: 'XXXXX',
        description: 'xxxxxxxx'
      },
      {
        img: require('../../../assets/images/promotion4.png'),
        title: 'XXXXX',
        description: 'xxxxxxxx'
      },
      {
        img: require('../../../assets/images/promotion4.png'),
        title: 'XXXXX',
        description: 'xxxxxxxx'
      },
      {
        img: require('../../../assets/images/promotion4.png'),
        title: 'XXXXX',
        description: 'xxxxxxxx'
      },
      {
        img: require('../../../assets/images/promotion4.png'),
        title: 'XXXXX',
        description: 'xxxxxxxx'
      },
    ]
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
        <CardContainer name="常见科学实验">
          {testData.map((item, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 240, marginTop: "20px" }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          ))}
        </CardContainer>
      </div>
    );
  }
}
export default Scientice;
