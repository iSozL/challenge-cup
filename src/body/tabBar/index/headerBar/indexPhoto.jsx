import React from "react";
import { Carousel } from "antd";
import './index.css'
class IndexPhoto extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Carousel autoplay dotPosition="top">
        {this.props.photoArray.map((item, index) => (
          <img key={index} src={item.name} className="img-height" alt="failed" />
        )
        )}
      </Carousel>
    );
  }
}
export default IndexPhoto;
