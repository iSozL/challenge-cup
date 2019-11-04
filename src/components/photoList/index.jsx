import React from 'react'
import './index.css'
class PhotoList extends React.Component {
  render() {
    return (
      <div className="promotion-container">
        <div>{this.props.name}<span className="promotion-slogan">{this.props.slogan}</span></div>
        <div className="img-container">
          <img src={require('../../assets/images/promotion1.png')} />
          <img src={require('../../assets/images/promotion2.png')} />
          <img src={require('../../assets/images/promotion3.png')} />
          <img src={require('../../assets/images/promotion4.png')} />
        </div>
      </div>
    )
  }
}
export default PhotoList