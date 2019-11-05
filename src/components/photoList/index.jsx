import React from 'react'
import './index.css'
class PhotoList extends React.Component {
  render() {
    return (
      <div className="promotion-container">
        <div className="promotion-title">{this.props.name}<span className="promotion-slogan">{this.props.slogan}</span></div>
        <div className="img-container">
          {this.props.photoList.map((item, index) => (
            <img key={index} src={item.name} alt="failed" />
          ))}
        </div>
      </div>
    )
  }
}
export default PhotoList