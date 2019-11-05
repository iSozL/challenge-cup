import React from 'react'
import NavigatorBar from './navigatorBar'
import IndexPhoto from './indexPhoto'
import SiderPhoto from './siderPhoto'
import { Layout } from 'antd';

const { Sider, Content } = Layout;
class HeaderBar extends React.Component {
  render() {
    return (
      <Layout>
        <Sider width={150}>
          <NavigatorBar />
        </Sider>
        <Content>
          <IndexPhoto />
        </Content>
        <Sider width={270}>
          <SiderPhoto />
        </Sider>
      </Layout>
    )
  }
}
export default HeaderBar