import React from "react";
import { Tabs } from "antd";
import "./shopTabs.css"
import ShopContainer from '../../../../components/shopContainer/index'
const { TabPane } = Tabs;
class ShopTabs extends React.Component {
  render() {
    const shopData = [
      {
        name: '所有店铺'
      },
      {
        name: '普通店铺'
      },
      {
        name: '专营店铺'
      },
      {
        name: '旗舰店铺'
      }
    ]
    const rankData = [
      {
        name: '综合'
      },
      {
        name: '好评率'
      },
      {
        name: '等级'
      },
      {
        name: '所在地'
      }
    ]
    return (
      <div className="test">
        <Tabs defaultActiveKey="1" type="card" style={{ marginTop: "20px" }}>
          {shopData.map((item, index) => (
            <TabPane tab={item.name} key={index + 1}>
              <Tabs defaultActiveKey="1">
                {
                  rankData.map((item, index) => (
                    <TabPane tab={item.name} key={index + 1}>
                      <ShopContainer />
                    </TabPane>
                  ))
                }
              </Tabs>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
export default ShopTabs;
