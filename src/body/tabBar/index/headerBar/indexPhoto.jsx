import React from "react";
import { Carousel } from "antd";
import './index.css'
class IndexPhoto extends React.Component {
  render() {
    const photoArray = [
      {name: require("../../../../assets/images/1.png")},
      {name: require("../../../../assets/images/2.png")},
      {name: require("../../../../assets/images/3.png")},
      {name: require("../../../../assets/images/4.png")},
      {name: require("../../../../assets/images/5.png")}
    ];
    return (
      <Carousel autoplay dotPosition="top">
        {photoArray.map((item, index) => (
          <img key={index} src={item.name} className="img-height" alt="failed" />
        )
        )}
      </Carousel>
    );
  }
}
export default IndexPhoto;
