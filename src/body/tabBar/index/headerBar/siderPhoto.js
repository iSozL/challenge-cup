import React from 'react'
import './index.css'
class SiderPhoto extends React.Component {
  render() {
    return (
      <div>
        <img className="sider-img" src={require('../../../../assets/images/sider1.png')}></img>
        <img className="sider-img" src={require('../../../../assets/images/sider2.png')}></img>
        <img className="sider-img" src={require('../../../../assets/images/sider3.png')}></img>
      </div>
    )
  }
}
export default SiderPhoto