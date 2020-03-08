import React from 'react';
import './index.css'
import {Card,Avatar} from 'antd'
const {Meta} = Card
const Talk = () => {
  return (
    <div className="talk-container">
      <div className="talk">
      <Card title="今日热帖" extra={<span>更多</span>} style={{ width: 300,height: 200,marginBottom: 20,border: '1px solid black' }}>
        <p>新冠肺炎的最新消息</p>
        <p>囊性肾癌的CT与超声检查各有什么不同？</p>
      </Card>
      <Card title="经验分享" extra={<span>更多</span>} style={{ width: 300,height: 200,marginBottom: 20,border: '1px solid black' }}>
        <p>科研小白指南</p>
        <p>西医综合复习方法</p>
        <p>Western blot 小技巧</p>
      </Card>
      <Card title="论坛热门人物" extra={<span>更多</span>} style={{ width: 300,height: 200,marginBottom: 20,border: '1px solid black' }}>
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          <div className="person">
            <img alt="name" className="person-img" src={require('../../../../assets/images/p1.png')}></img>
            <span>阿司匹林</span>
          </div>
          <div className="person">
            <img alt="name" className="person-img" src={require('../../../../assets/images/p2.png')}></img>
            <span>我今天也想出去玩</span>
          </div>
          <div className="person">
            <img alt="name" className="person-img" src={require('../../../../assets/images/p3.png')}></img>
            <span>凛冬已至</span>
          </div>
          <div className="person">
            <img alt="name" className="person-img" src={require('../../../../assets/images/p4.png')}></img>
            <span>木制圆碗</span>
          </div>
        </div>
      </Card>
      <Card title="猜你喜欢" extra={<span>更多</span>} style={{ width: 300,height: 200,marginBottom: 20,border: '1px solid black' }}>
        医学影像学考研方向
      </Card>
      <Card title="精品论贴" extra={<span>更多</span>} style={{ width: 300,height: 200,marginBottom: 20,border: '1px solid black' }}>
        <p>关于口罩的科普</p>
        <p>各种试剂盒公司推荐</p>
        <p>新冠肺炎是什么？</p>
      </Card>
      <Card title="按学科看帖" extra={<span>更多</span>} style={{ width: 300,height: 200,marginBottom: 20,border: '1px solid black' }}>
        <p>生理学  病理学  病理生理学</p>
        <p>药理学 外科学 内科学</p>
      </Card>
      </div>
    </div>
  )
}
export default Talk;