import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header/index";
import Body from "./body/index/index";
class App extends React.Component {
  IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    if (window.screen.width >= 768) {
      flag = true;
    }
    return flag;
  }
  render() {
    return this.IsPC() ? (
      <div>
        <Header />
        <Body></Body>
      </div>
    ) : (
      <div>请在PC端打开此网页</div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
