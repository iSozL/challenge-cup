import React from "react";
import NavigatorBar from "./navigatorBar";
import IndexPhoto from "./indexPhoto";
import SiderPhoto from "./siderPhoto";
import { Layout } from "antd";

const { Sider, Content } = Layout;
class HeaderBar extends React.Component {
  render() {
    const photoArray = [
      { name: require("../../../../assets/images/1.png") },
      { name: require("../../../../assets/images/2.png") },
      { name: require("../../../../assets/images/3.png") },
      { name: require("../../../../assets/images/4.png") },
      { name: require("../../../../assets/images/5.png") }
    ];
    const siderPhoto = [
      {
        name: require("../../../../assets/images/sider1.png")
      },
      {
        name: require("../../../../assets/images/sider2.png")
      },
      {
        name: require("../../../../assets/images/sider3.png")
      }
    ];
    return (
      <Layout>
        <Sider width={150}>
          <NavigatorBar />
        </Sider>
        <Content>
          <IndexPhoto photoArray={photoArray} />
        </Content>
        <Sider width={270}>
          <SiderPhoto siderPhoto={siderPhoto} />
        </Sider>
      </Layout>
    );
  }
}
export default HeaderBar;
