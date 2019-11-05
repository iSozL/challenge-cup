import React from "react";
import { Tabs } from "antd";
import "./index.css";
import Index from "./index/index";
import Introduction from './businessIntroduction/Introduction'
const { TabPane } = Tabs;
class TabBar extends React.Component {
  render() {
    const data = [
      {
        name: "首页",
        jsx: <Index />
      },
      {
        name: "商家介绍",
        jsx: <Introduction />
      },
      {
        name: "活动专区"
      },
      {
        name: "科研专区"
      },
      {
        name: "实验室招聘"
      },
      {
        name: "论坛"
      }
    ];
    return (
      <div className="container1" className="tab">
        <Tabs defaultActiveKey="1" tabBarGutter={3} type="card">
          {data.map((item, index) => (
            <TabPane
              tab={item.name}
              key={index + 1}
              style={{ fontWeight: "bold" }}
            >
              {item.jsx}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
export default TabBar;
