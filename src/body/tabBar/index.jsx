import React from "react";
import { Tabs } from "antd";
import "./index.css";
import Index from "./index/index";
import Introduction from './businessIntroduction/Introduction'
import Scientice from './scientificResearch/index'
import Recruitment from './recruitment/index'
import Forum from './forum/index'
import Activities from './activities/index'
import Training from './training/training'
import About from './about/index'
import Shared from './shared/index.tsx'
import Clinical from './clinical/index.tsx'
const { TabPane } = Tabs;
class TabBar extends React.Component {
  render() {
    const data = [
      {
        name: "主页",
        jsx: <Index />
      },
      {
        name: "共享实验室",
        jsx: <Shared />
      },
      {
        name: "医学看点",
        jsx: <Activities />
      },
      {
        name: "教学共享",
        jsx: <Scientice />
      },
      {
        name: "临床接轨",
        jsx: <Clinical />
      },
      // {
      //   name: "实验室培训",
      //   jsx: <Training />
      // },
      {
        name: "论坛",
        jsx: <Forum />
      },
      {
        name: "关于我们",
        jsx: <About />
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
