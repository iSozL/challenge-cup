import React from "react";
import { Card, Icon, Button, Divider, Table } from "antd";
import "./index.css";
class ShopContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.shops.map((item, index) => (
          <Card key={index}>
            <div className="company-introduct">
              <div className="company-detail">
                <div>
                  {item.name}
                  <Icon type="taobao-circle" className="shopName" />
                  <Icon type="qq" className="shopName" />
                  <Icon type="alipay" className="shopName" />
                </div>
                <div className="shopDetail">简介 {item.introduction}</div>
                <div className="shopDetail">主管 {item.manager}</div>
                <div className="shopDetail">
                  <span>公司 {item.company}</span>
                  <span>成交 {item.success}</span>
                  <span>好评率 {item.rate}</span>
                </div>
              </div>
              <div>
                <div>
                  <Button
                    style={{
                      background: "#ffe4b5",
                      color: "orange",
                      marginBottom: "10px"
                    }}
                  >
                    进入店铺
                  </Button>
                </div>
                <div>
                  <Button style={{ background: "#87cefa", color: "#1E90FF" }}>
                    联系我们
                  </Button>
                </div>
              </div>
            </div>
            <Divider style={{ marginBottom: 0 }} />
            <div>
              <Table />
            </div>
          </Card>
        ))}
         </div>
    );
  }
}
export default ShopContainer;
