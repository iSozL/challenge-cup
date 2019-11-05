import React from 'react'
import './index.css'
class Record extends React.Component {
  render() {
    return(
      <div className="record-container">
        <div className="vline-box">
          <span>关于我们</span>
          <span>联系我们</span>
          <span>联系客服</span>
          <span>合作招商</span>
          <span>营销中心</span>
          <span>销售联盟</span>
          <span>风险检测</span>
          <span>隐私政策</span>
          <div className="special">Contact Us</div>
        </div>
        <div className="record-code">
          CopyRight©XXXX XXXXX.comXICP证XXXXXXX号XICP备XXXXXX号
        </div>
      </div>
    )
  }
}
export default Record