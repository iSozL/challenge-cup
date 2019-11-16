import React from "react";
import { Tabs } from "antd";
import Care from './care'
import Hot from './hot'
import Recommend from './recommend'
import SendPost from './sendPost'
import FixButton from '../../../components/fixButton/index'
const { TabPane } = Tabs;
class Forum extends React.Component {
  render() {
    const forumData = [
      {
        name: "推荐",
        jsx: <Recommend />
      },
      {
        name: "关注",
        jsx: <Care />
      },
      {
        name: "热榜",
        jsx: <Hot />
      }
    ]
    return (
      <Tabs defaultActiveKey="1">
        {forumData.map((item, index)=> (
          <TabPane tab={item.name} key={index + 1}>
            <FixButton />
            {item.jsx}
            <SendPost />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}
export default Forum
