import React from "react";
import { Menu } from "antd";
import "./index.css";
class NavigatorBar extends React.Component {
  render() {
    const data = [
      {name: '生物试剂'},
      {name: '化学试剂'},
      {name: '抗体'},
      {name: '实验室设备/仪器'},
      {name: '细胞/细胞库'},
      {name: '实验动物'},
      {name: '医疗器械'},
      {name: 'EUSA试剂盒'},
      {name: '科研技术服务'},
      {name: '药物类'}
    ]
    return (
      <Menu className="navigator">
        {data.map((item, index) => (
          <Menu.Item key={index + 1}>
            <span class="menu-name">{item.name}</span>
            </Menu.Item>
        ))}
      </Menu>
    );
  }
}
export default NavigatorBar;
