import React from "react";
import { Tabs } from "antd";
import './index.css'
const { TabPane } = Tabs;
class TabBar extends React.Component {
  render() {
    const data = [
      {
        name: '首页'
      },
      {
        name: '商家介绍'
      }, 
      {
        name: '活动专区'
      },
      {
        name: '科研专区'
      },
      {
        name: '实验室招聘'
      },
      {
        name: '论坛'
      }
    ]
    return (
      <div className="container">
        <Tabs defaultActiveKey="1" tabBarGutter={3} tabBarStyle={{color: '#3bc6b6'}}>
          { data.map((item, index) => (
            <TabPane tab={item.name} key={index + 1}  style={{ fontWeight: 'bold' }} />
            ))
          }
        </Tabs>
      </div>
    );
  }
}
export default TabBar;
