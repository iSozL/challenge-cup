import React from 'react'
import { Row, Col } from 'antd'
import NavigatorBar from './navigatorBar'
class HeaderBar extends React.Component {
  render() {
    return (
      <Row>
        <Col span={3}>
          <NavigatorBar />
        </Col>
        <Col span={4}>
          2
        </Col>
        <Col span={4}>
          3
        </Col>
      </Row>
    )
  }
}
export default HeaderBar