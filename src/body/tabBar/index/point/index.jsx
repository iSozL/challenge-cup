import React from 'react';
import { Card } from 'antd';
import './index.css'
const Point = () => {
  return (
    <div className="point-index">
      <div className="point-header">医学看点</div>
      <div className="point">
        <div className="point-container">
          <Card title="实验室" style={{ width: 150 }}>
            <p>离我最近:定位我附近的实验室</p>
            <p>最新:A博导受邀入驻我平台</p>
            <p>最热:江西省新型实验室标准入选名单</p>
          </Card>
          <img className="point-img" src={require("../../../../assets/images/yxkd1.png")} alt="实验室" />
        </div>
        <div className="point-container">
          <Card title="临床诊断" style={{ width: 150 }}>
            核酸检测阴性不能排除新冠感染！
            长达十年直肠癌患者自述诊治经过，悔不当初。
          </Card>
          <img className="point-img" src={require("../../../../assets/images/yxkd2.png")} alt="实验室" />
        </div>
        <div className="point-container">
          <Card title="生活小贴士" style={{ width: 150 }}>
            不想节食？怎么减肥？一招告诉你
            经常流鼻涕不见好，你以为只是感冒吗？
            想要预防冻疮，避免温度极速变化才是关键！
          </Card>
          <img className="point-img" src={require("../../../../assets/images/yxkd3.png")} alt="实验室" />
        </div>
      </div>
    </div>
  )
}
export default Point;