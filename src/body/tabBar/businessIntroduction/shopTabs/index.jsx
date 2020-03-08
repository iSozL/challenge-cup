import React from "react";
import { Tabs, Pagination } from "antd";
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
          name: 'XXX老师的实验室',
          lb: '生理',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '2',
          name: 'XXX老师的实验室',
          lb: '病理',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '3',
          name: 'XXX老师的实验室',
          lb: '微生物',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '4',
          name: 'XXX老师的实验室',
          lb: '寄生虫',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        },
        {
          key: '5',
          name: 'XXX老师的实验室',
          lb: '影像',
          introduction: '无',
          manager: '小明',
          company: '江西南昌',
          success: '6',
          rate: '98%',
        }
      ],
      showShops: [],
      size: 5
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
        name: '动物实验'
      },
      {
        name: '细胞实验'
      },
    ]
    const rankData = [
      {
        name: '病理'
      },
      {
        name: '生化'
      },
      {
        name: '生理'
      },
      {
        name: '病生'
      },
      {
        name: '微生物'
      },
      {
        name: '寄生虫'
      },
      {
        name: '药理'
      },
      {
        name: '影像'
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
