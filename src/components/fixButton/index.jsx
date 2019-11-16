import { Affix, Button } from "antd";
import React from "react";
import { Modal } from "antd";
import { Input } from 'antd';

const { TextArea } = Input;
class FixButton extends React.Component {
  state = {
    top: 10,
    bottom: 10,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top} style={{textAlign:"right",margin:"0px auto 0px auto"}}>
          {/* <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10
              });
            }}
          >
            发表帖子
          </Button> */}
          <Button
            type="primary"
            onClick={this.showModal}
          >
            发表帖子
          </Button>
          <Modal
            title="发表"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <TextArea />
          </Modal>
        </Affix>
      </div>
    );
  }
}
export default FixButton;
