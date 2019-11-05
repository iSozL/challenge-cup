import React from "react";
import { Tabs, Pagination, Table, Tag, Divider } from "antd";
import "./shopTabs.css"
import ShopContainer from '../../../../components/shopContainer/index'
const { TabPane } = Tabs;
class ShopTabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shops: [
        {
          key: '1',
          name: '江西XX有限公司',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '2',
          name: '江西XX有限公司',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '3',
          name: '江西XX有限公司',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '4',
          name: '江西XX有限公司',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '5',
          name: '江西XX有限公司',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        }
      ],
      showShops: [],
      size: 3
    }
    this.getIndex = this.getIndex.bind(this)
  }
  getIndex(e) {
    const x = this.state.size
    const datas = this.state.shops.slice((e - 1) * x, e * x)
    this.setState({
      showShops: datas
    })
  }
  componentDidMount(){
    this.setState({
      showShops: this.state.shops.slice(0, this.state.size)
    })
  }
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
                      <ShopContainer shops={this.state.showShops} />
                      <Pagination defaultCurrent={1} total={this.state.shops.length} pageSize={this.state.size} onChange={(e) => this.getIndex(e)}>
                      </Pagination>
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
