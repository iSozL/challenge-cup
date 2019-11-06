import React from "react";
import { Card, Button, Icon } from "antd";
class RecommendPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>nmsl</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>subtitle</div>
          <Button>阅读全文</Button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <Icon type="like" />我赞同
          <Icon type="dislike" />我反对
          <Icon type="message" />评论
          <Icon type="share-alt" />分享
          <Icon type="folder-open" />收藏
          <Icon type="heart" />喜欢
        </div>
      </Card>
    );
  }
}
class Recommend extends React.Component {
  render() {
    return (
      <div>
        <RecommendPost />
      </div>
    );
  }
}
export default Recommend;
