import React from 'react'
import './index.css'
class Promotion extends React.Component {
  render() {
    return (
      <div className="promotion-container">
        <div>团购促销<span className="promotion-slogan">绝对超值,有你想不到的惊喜</span></div>
        <div className="img-container">
          <img src={require('../../../../assets/images/promotion1.png')} />
          <img src={require('../../../../assets/images/promotion2.png')} />
          <img src={require('../../../../assets/images/promotion3.png')} />
          <img src={require('../../../../assets/images/promotion4.png')} />
        </div>
      </div>
    )
  }
}
export default Promotion