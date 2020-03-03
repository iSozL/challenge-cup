import React from "react";
import { Divider, Icon } from "antd";
import Record from './record/index'
import "./index.css";
function Footer() {
  const tagsData = [
    {
      name: "正品保障",
      slogan: "正品保障, 提供发票",
      icon: "safety"
    },
    {
      name: "优惠价格",
      slogan: "超低平台价, 低于市场价",
      icon: "pay-circle"
    },
    {
      name: "极速物流",
      slogan: "如约发货, 极速送达",
      icon: "thunderbolt"
    },
    {
      name: "售后无忧",
      slogan: "退货无忧, 一对一沟通",
      icon: "like"
    },
    {
      name: "特色服务",
      slogan: "私人定制, 品牌策划",
      icon: "star"
    }
  ];
  const expressData = [
    {
      name: '关于我们',
      detail: ['联系我们', '法律援助', '加入我们']
    },
    {
      name: '实验宝库',
      detail: ['用户服务中心', '了解实验室', '实验指导']
    },
    {
      name: '课程中心',
      detail: ['直播课程通道', '课程评价']
    },
    {
      name: '临床接轨',
      detail: ['影像成片库', '病历库', '医生简介']
    },
  ]
  return (
    <div>
      {/* <Divider style={{ height: "3px" }} /> */}
      {/* <div className="footer-container">
        <div className="footer-container footer-width">
          {tagsData.map(
            (item,index) => (
              <div className="tag-container" key={index}>
                <Icon type={item.icon} style={{ fontSize: "40px", color: "orange" }} />
                <div className="tag-title">
                  <div className="tags">{item.name}</div>
                  <div className="tag-slogan">{item.slogan}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div> */}
      <Divider style={{ height: "3px" }} />
      <div className="footer-container">
        <div className="footer-container footer-width">
          { expressData.map((item, index) => (
            <div key={index} className="express-module">
              <div className="express">{item.name}</div>
              { item.detail.map((value, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
          )) }
          <div>
            <div className="express">服务热线</div>
            <div>XXXXXXXXXXX</div>
            <div>周一至周日9：00~14：00</div>
          </div>
          <div className="express-module">
            <img alt="failed" className="code" src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" />
            <div>扫码关注享更多优惠</div>
          </div>
        </div>
      </div>
      <Record />
    </div>
  );
}
export default Footer;
