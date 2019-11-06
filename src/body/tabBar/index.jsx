import React from "react";
import { Tabs } from "antd";
import "./index.css";
import Index from "./index/index";
import Introduction from './businessIntroduction/Introduction'
import Scientice from './scientificResearch/index'
import Recruitment from './recruitment/index'
import Forum from './forum/index'
import Activities from './activities/index'
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
        name: "活动专区",
        jsx: <Activities />
      },
      {
        name: "科研专区",
        jsx: <Scientice />
      },
      {
        name: "实验室招聘",
        jsx: <Recruitment />
      },
      {
        name: "论坛",
        jsx: <Forum />
      }
    ];
    return (
      <div className="tab">
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
