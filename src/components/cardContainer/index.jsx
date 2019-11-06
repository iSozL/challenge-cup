import React from "react";
import { Card } from "antd";
import "./index.css";
class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ marginTop: "20px" }}>
        <div className="card-container">
          <div style={{ fontSize: "18px", borderBottom: "6px solid orange" }}>
            {this.props.name}
          </div>
          <div
            style={{ background: "orange", width: "200px", height: "2px" }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap"
            }}
          >
            {this.props.children}
          </div>
        </div>
      </Card>
    );
  }
}
export default CardContainer;
