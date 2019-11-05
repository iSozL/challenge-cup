import React from "react";
import { Card, Icon, Button, Divider, Table, Tag } from "antd";
import "./index.css";
class ShopContainer extends React.Component {
  render() {
    const columns = [
      {
        title: '热销产品',
        dataIndex: '热销产品',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '售价',
        dataIndex: '售价',
        key: 'age',
      },
      {
        title: '交易次数',
        dataIndex: '交易次数',
        key: 'address',
      },
      {
        title: '评价',
        key: '评价',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
    ];
    return (
      <Card>
        <div className="company-introduct">
          <div className="company-detail">
            <div>
              江西XX科技有限公司
              <Icon type="taobao-circle" className="shopName" />
              <Icon type="qq" className="shopName" />
              <Icon type="alipay" className="shopName" />
            </div>
            <div className="shopDetail">简介</div>
            <div className="shopDetail">主管</div>
            <div className="shopDetail">
              <span>公司 你妈死了</span>
              <span>成交1</span>
              <span>好评率100%</span>
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
        <Divider style={{marginBottom: 0}} />
        <div>
          {/* <div>热销产品</div>
          <div>售价</div>
          <div>交易次数</div> */}
          <Table columns={columns} />
        </div>
      </Card>
    );
  }
}
export default ShopContainer;
