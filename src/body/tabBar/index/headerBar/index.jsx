import React from "react";
import NavigatorBar from "./navigatorBar";
import IndexPhoto from "./indexPhoto";
import SiderPhoto from "./siderPhoto";
import { Layout } from "antd";
import './index.css'

const { Sider, Content } = Layout;
class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    const siderPhoto = [
      {
        name: require("../../../../assets/images/ss1.png")
      },
      {
        name: require("../../../../assets/images/ss2.png")
      },
      {
        name: require("../../../../assets/images/ss3.png")
      },
      {
        name: require("../../../../assets/images/ss4.png")
      }
    ];
    return (
      <div className="bar">
      <Layout>
        {/* <Sider width={150}>
          <NavigatorBar />
        </Sider> */}
        <Content>
          <IndexPhoto photoArray={this.props.photoArray} />
        </Content>
        <Sider width={270}>
          <SiderPhoto siderPhoto={siderPhoto} />
        </Sider>
      </Layout>
      </div>
    );
  }
}
export default HeaderBar;
