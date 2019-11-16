import { Affix, Button } from 'antd';

class FixButton extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  };

  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
      </div>
    );
  }
}
export default FixButton