import React from 'react';
import {Collapse, Input} from 'antd'
const {TextArea} = Input
const {Panel} = Collapse
class SendPost extends React.Component {
  render() {
    return (
      <Collapse style={{marginTop: "20px"}}>
        <Panel header="发表话题">
          <TextArea placeholder="说点什么吧..." />
        </Panel>
      </Collapse>
    )
  }
}
export default SendPost