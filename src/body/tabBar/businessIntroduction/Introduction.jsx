import React from "react";
import Promote from "./promote";
import { Layout } from "antd";
import Options from './options'
import ShopTabs from './shopTabs/index'
const { Header, Footer, Sider, Content } = Layout;
class Introduction extends React.Component {
  render() {
    return (
      <div>
        <Promote />
        <Layout>
          <Layout>
            <Header style={{marginTop: "20px"}}>
              <Options />
            </Header>
            <Content>
              <ShopTabs />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
          <Sider style={{marginTop: "20px"}}>Sider</Sider>
        </Layout>
      </div>
    );
  }
}
export default Introduction;
