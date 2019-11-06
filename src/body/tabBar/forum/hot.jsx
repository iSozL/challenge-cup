import React from "react";
import { Tabs, Card, Button, Icon } from "antd";
const { TabPane } = Tabs;
class HotPost extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => (
          <Card key={index} style={{marginTop: "20px"}}>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {item.title}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                {item.subtitle}
              </div>
              <Button>阅读全文</Button>
            </div>
            <div>
              <Icon type="fire" style={{color: 'red', marginLeft: "20px"}} /> xx热度
              <span style={{width: '100px', display: "inline-block"}}></span>
              <Icon type="share-alt" /> 分享
            </div>
          </Card>
        ))}
      </div>
    );
  }
}
class Hot extends React.Component {
  render() {
    const hotTabs = [
      {
        name: "商家",
        data: [
          {
            title: "2019中国生物实验室耗材行业发展概况",
            subtitle: "..........................."
          },
          {
            title: "2019中国生物实验室耗材行业发展概况",
            subtitle: "..........................."
          },
          {
            title: "2019中国生物实验室耗材行业发展概况",
            subtitle: "..........................."
          }
        ]
      },
      {
        name: "实验室",
        data: [
          {
            title: "2019中国生物实验室耗材行业发展概况",
            subtitle: "..........................."
          },
          {
            title: "1",
            subtitle: "2"
          },
          {
            title: "1",
            subtitle: "2"
          }
        ]
      },
      {
        name: "其他",
        data: [
          {
            title: "2019中国生物实验室耗材行业发展概况",
            subtitle: "..........................."
          },
          {
            title: "2019中国生物实验室耗材行业发展概况",
            subtitle: "..........................."
          },
          {
            title: "1",
            subtitle: "2"
          }
        ]
      }
    ];
    return (
      <Tabs type="card">
        {hotTabs.map((item, index) => (
          <TabPane tab={item.name} key={index + 1}>
            <HotPost data={item.data} />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}
export default Hot;
