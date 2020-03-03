import React from 'react';
import './index.css'
const Share = () => {
  return (
    <div className="share">
      <div className="share-container">
        <img src={require('../../../../assets/images/jxgx1.png')} alt="nmsl" className="share-img" />
        <div className="share-content">
          利用校园网络和宽带互联网络以及非对称数字用户线路(ADSL)技术实现直播，将一位老师辛勤的课堂授课，实时地、流畅地传递到其他教室，让更多的学生参与学习，让教室外的学生、老师进行实时观摩而不妨碍正常授课。
        </div>
      </div>
      <div className="share-container">
        <img src={require('../../../../assets/images/jxgx2.png')} alt="nmsl" className="share-img" />
        <div className="share-content">
          按医学基础学科对讲座做了精细的分类，每个讲座结束后都会对参加的学生进行知识掌握考察只有达到标准才能通过该课程，通过此可以帮助医学生分块扫除知识盲点。
        </div>
      </div>
      <div className="share-container">
        <img src={require('../../../../assets/images/jxgx3.png')} alt="nmsl" className="share-img" />
        <div className="share-content">
          我平台将紧密跟踪合作医院的疑难杂症病例会诊，将同一个病例的各阶段的会诊按时间顺序整理成一个合视频。Ps:视频附有病例中患者做出诊断的必要辅助信息（经过私密处理，承诺保证患者隐私）。
        </div>
      </div>
    </div>
  )
}
export default Share;