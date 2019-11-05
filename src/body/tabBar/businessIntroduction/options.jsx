import React from "react";
import { Card, Divider } from "antd";
import "./index.css";
class Options extends React.Component {
  render() {
    const categoryData = [
      "实验动物",
      "抗体",
      "科学技术服务",
      "细胞",
      "实验设备/仪器",
      "医疗器械",
      "仪器租赁"
    ];
    const shopData = [
      "普通店铺",
      "专营店铺",
      "旗舰店铺"
    ]
    return (
      <Card>
        <div className="options-container">
          <div style={{color: "gray", paddingRight: "20px"}}>分类</div>
          {categoryData.map((item, index) => (
            <div key={index} className="options">{item}</div>
          ))}
        </div>
        <Divider />
        <div className="options-container">
          <div style={{color: "gray", paddingRight: "20px"}}>店铺</div>
          {shopData.map((item, index) => (
            <div key={index} className="options">{item}</div>
          ))}
        </div>
      </Card>
    );
  }
}
export default Options;
