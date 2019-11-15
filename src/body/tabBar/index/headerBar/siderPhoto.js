import React from 'react'
import './index.css'
class SiderPhoto extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.siderPhoto.map((item, index) => (
          <img alt="failed" className="sider-img" src={item.name} key={index} />
        ))}
      </div>
    )
  }
}
export default SiderPhoto