import React from "react";
import { Tabs, Collapse, PageHeader, Button } from "antd";
import Care from './care'
import Hot from './hot'
import Recommend from './recommend'
import SendPost from './sendPost'
import FixButton from '../../../components/fixButton/index'
import Forums from '../index/talk/index'
const { TabPane } = Tabs;
const { Panel } = Collapse;
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
      <div>
        <Forums />
        <Tabs defaultActiveKey="1">
          {forumData.map((item, index)=> (
            <TabPane tab={item.name} key={index + 1}>
              <Collapse style={{marginTop: 30}}>
                <Panel>
                  <div>
                    <div style={{fontSize: 20, marginBottom: 10}}>我的榜单</div>
                    <div>
                      <Button style={{marginRight: 20}}>全站</Button>
                      <Button style={{marginRight: 20}}>肿瘤</Button>
                      <Button style={{marginRight: 20}}>影响</Button>
                      <Button style={{marginRight: 20}}>考研</Button>
                      <Button style={{marginRight: 20}}>实验</Button>
                      <Button style={{marginRight: 20}}>外科</Button>
                    </div>
                  </div>
                  <div style={{marginTop: 20}}>
                    <div style={{fontSize: 20, marginBottom: 10}}>推荐榜单</div>
                    <div>
                      <Button style={{marginRight: 20}}>新冠肺炎</Button>
                      <Button style={{marginRight: 20}}>考研</Button>
                      <Button style={{marginRight: 20}}>放射</Button>
                      <Button style={{marginRight: 20}}>超声</Button>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <FixButton />
              {item.jsx}
              <SendPost />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
export default Forum
