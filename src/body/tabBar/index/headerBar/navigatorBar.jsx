import React from "react";
import { Menu, Dropdown } from "antd";
import "./index.css";
class NavigatorBar extends React.Component {
  render() {
    const data = [
      { name: "生物试剂" },
      { name: "化学试剂" },
      { name: "抗体" },
      { name: "实验室设备/仪器" },
      { name: "细胞/细胞库" },
      { name: "实验动物" },
      { name: "医疗器械" },
      { name: "EUSA试剂盒" },
      { name: "科研技术服务" },
      { name: "药物类" }
    ];
    const menu = (
      <Menu style={{width: '1000px'}}>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Menu className="navigator">
        {data.map((item, index) => (
          <Menu.Item key={index + 1}>
            <Dropdown placement="bottomLeft" overlay={menu} trigger={["click"]}>
              <span className="menu-name">{item.name}</span>
            </Dropdown>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
export default NavigatorBar;
