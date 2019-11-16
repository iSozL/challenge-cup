import React from "react";
import { Card, Button, Icon } from "antd";
class RecommendPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const recommendPostData = [
      {
        title: "临床医学讨论一区",
        subtitle: "神经科学专业、呼吸与胸部疾病、心理学与精神病学专业、心血管专业、麻醉疼痛专业、急救与危重病"
      },
      {
        title: "临床医学讨论二区",
        subtitle: "普通外科、消化内科、肾脏泌尿专业、内分泌与代谢病、肿瘤医学、血液专业、感染专业、风湿免疫专业、皮肤与性传播疾病"
      },
      {
        title: "临床医学讨论三区",
        subtitle: "妇产专业、眼科专业、儿科专业耳鼻咽喉头颈外科专业、骨科专业、修复重建和烧伤整形、口腔专业、社区与全科医学"
      },
      {
        title: "临床医学讨论四区",
        subtitle: "临床检验医学、临床病理、影像医学和核医学、超声医学"
      },
      {
        title: "临床医学讨论五区",
        subtitle: "中医讨论版、护理专业、康复医学、法医学及特种医学、老年医学专业、卫生法律人文、医学哲学和医学史"
      },
      {
        title: "基础医学和生命科学讨论区",
        subtitle: "形态学与生理生化、神经生物学、再生医学与组织工程细胞生物学和信号转导、植物学与农林科学、生物信息学、动物科学与动物医学、水生生物学＆海洋生物学、遗传学与发育生物学、微生态医学"
      },
      {
        title: "药学讨论区",
        subtitle: "新药与信息、药物化学、制剂技术、分析技术、临床试验及药理、合理用药与药物不良反应、医药知识产权、中药与保健食品、医药产品经理、GXP与认证交流、生物制药、执业药师讨论、执药相关、医疗器械、化妆品"
      },
      {
        title: "实验技术讨论区",
        subtitle: "核酸基因技术、蛋白质和糖学技术、细胞技术、PCR技术、免疫学、微生物学和寄生虫学、实验动物与组织学技术、实验室建设与采购、医学统计和生物统计讨论版"
      },
      {
        title: "公共卫生与预防医学讨论区",
        subtitle: "食品科学和食品安全、预防医学、循证医学与临床运用、卫生事业与医院管理、营养学讨论版"
      },
      {
        title: "科研与学习交流区",
        subtitle: "论文写作和投稿交流天地、基金申报与开题互助、医学有声英语、飘洋过海"
      },
    ];
    return (
      <div>
        {recommendPostData.map((item, index) => (
          <Card
            key={index}
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ width: "100%", display: "flex", justifyContent:"center", marginBottom: "20px"}}>
              <div style={{fontSize: "18px", fontWeight: "bold"}}>{item.title}</div>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <img src={require("../../../assets/images/avater.jpeg")} style={{width: "150px", height: "150px"}} />
              <div style={{marginLeft: "30px"}}>{item.subtitle}</div>
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
