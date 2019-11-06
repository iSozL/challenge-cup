import React from "react";
import Promote from "./promote";
import { Layout } from "antd";
import Options from './options'
import ShopTabs from './shopTabs/index'
import Recommend from './recommend'
import PromoteFooter from "./promoteFooter";
import Advertise from "./advertise"
import KingShop from "./kingShop"
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
            <Footer>
              <PromoteFooter />
            </Footer>
          </Layout>
          <Sider style={{marginTop: "20px", background: '#f0f2f5'}}>
            <Recommend />
          </Sider>
        </Layout>
        <Advertise />
        <KingShop />
      </div>
    );
  }
}
export default Introduction;
