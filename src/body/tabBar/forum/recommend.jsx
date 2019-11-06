import React from "react";
import { Card, Button, Icon } from "antd";
class RecommendPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const recommendPostData = [
      {
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      },
      {
        title: "2019中国生物实验室耗材行业发展概况",
        subtitle: "..........................."
      }
    ];
    return (
      <div>
        {recommendPostData.map((item, index) => (
          <Card key={index} style={{marginTop: "20px"}}>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {item.title}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                {item.subtitle}
              </div>
              <Button>阅读全文</Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                padding: "0 0 0 500px"
              }}
            >
              <div>
                <Icon type="like" /> 我赞同
              </div>
              <div>
                <Icon type="dislike" /> 我反对
              </div>
              <div>
                <Icon type="message" /> 评论
              </div>
              <div>
                <Icon type="share-alt" /> 分享
              </div>
              <div>
                <Icon type="folder-open" /> 收藏
              </div>
              <div>
                <Icon type="heart" /> 喜欢
              </div>
            </div>
          </Card>
        ))}
      </div>
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
