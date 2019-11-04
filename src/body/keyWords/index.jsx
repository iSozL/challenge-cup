import React from 'react'
import './index.css'
class KeyWords extends React.Component {
  render() {
    const data = ['抗体','实验动物', '试剂', 'EUSA实验盒', '药物类', '实验室招聘']
    return (
      <div className="container">
        { data.map((item, index) => (
          <span key={index}>{ item }</span>
        )) }
      </div>
    )
  }
}
export default KeyWords