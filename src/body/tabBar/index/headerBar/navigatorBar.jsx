import React from "react";
import { Menu, Dropdown } from "antd";
import "./index.css";
class NavigatorBar extends React.Component {
  render() {
    const data = [
      {
        name: "生物试剂",
        items: [
          {
            name: "生物酶",
            had: "蛋白酶 / 胰酶 / 脂肪酶 / 淀粉酶 / 内切酶 / 纤维素酶"
          },
          {
            name: "分子生物学",
            had:
              "缓冲液、稀释液 / DNA转染 / DNA纯化 / PCR相关试剂盒 / 核酸染料 / 质粒 / 文库 / 二代测序 / RNA纯化 / 探针合成、标记 / 原位杂交"
          },
          {
            name: "免疫学",
            had: "流式抗体 / 免疫印迹 / 免疫沉淀、组化"
          },
          {
            name: "蛋白质类",
            had:
              "蛋白质、抗原、多肽 / 蛋白检测 / 蛋白纯化 / 蛋白电泳 / 蛋白标记 / 蛋白质定量 / 蛋白修饰"
          },
          {
            name: "其他生物试剂",
            had: ""
          }
        ]
      },
      {
        name: "化学试剂",
        items: [
          {
            name: "常规试剂",
            had:
              "有机/无机分析试剂：酸 / 碱 / 盐 / 烃 / 酯 / 醛 / 羧酸 / 酮 / 氧化物"
          },
          {
            name: "特效试剂",
            had: "聚合剂 / 沉淀剂 / 显色剂"
          },
          {
            name: "指示剂/试纸",
            had: "溴甲酚绿 / 二甲酚绿 / 酚酞 / 甲基红 / 荧光素 / 淀粉 / PH试纸"
          },
          {
            name: "仪器分析试剂",
            had: "卡尔费体试剂"
          },
          {
            name: "标准品/标准溶液",
            had: ""
          }
        ]
      },
      {
        name: "抗体",
        items: [
          {
            name: "一抗",
            had: "一抗"
          },
          {
            name: "二抗",
            had: "Westren blot二抗    免疫组化二抗"
          },
          {
            name: "单克隆抗体",
            had: ""
          },
          {
            name: "多克隆抗体",
            had: ""
          },
          {
            name: "试剂盒",
            had:
              "WB显色试剂盒   WB发光试剂盒   免疫组化试剂盒    流式细胞试剂盒"
          },
          {
            name: "磷酸化抗体",
            had: "磷酸化特异抗体  激酶和磷酸化抗体"
          },
          {
            name: "其他",
            had: "结构蛋白抗体    肿瘤凋亡/抑制抗体    信号分子抗体"
          }
        ]
      },
      {
        name: "实验室设备/仪器",
        items: [
          {
            name: "",
            had: ""
          }
        ]
      },
      {
        name: "细胞/细胞库",
        items: [
          {
            name: "细胞库",
            had: "原代细胞   干细胞   免疫细胞   细胞株"
          },
          {
            name: "细胞培养",
            had:
              "培养基 血清及其替代物 琼脂 细胞培养添加物 细胞因子 抗生素 平衡盐溶液 细胞裂解液 蛋白胨 氨基酸类"
          },
          {
            name: "其他",
            had: "细胞检测试剂"
          }
        ]
      },
      { 
        name: "实验动物",
        items: [
          {
            name: "常用动物",
            had: "小鼠  大鼠  裸鼠 豚鼠  兔 灵长类  犬  实验猪  鸡  羊 猫 地鼠"
          },
          {
            name: "动物模型",
            had: "肿瘤类  心血管类  呼吸类  消化类  内分泌类  营养类  神经系统类  骨骼系统类"
          },
          {
            name: "水生实验动物",
            had: "海水生物   淡水生物  其它"
          },
          {
            name: "基因工程",
            had: "遗传小鼠"
          },
          {
            name: "特色动物",
            had: ""
          }
        ]
      },
      { 
        name: "医疗器械",
        items: []
      },
      { 
        name: "ELISA试剂盒",
        items: [
          {
            name: "动物ELISA试剂盒",
            had: "小鼠ELISA试剂盒 / 大鼠 ELISA 试剂盒 / 兔ELISA 试剂盒 / 猪ELISA 试剂盒 / 人ELISA 试剂盒 / 狗 ELISA 试剂盒 / 鸡 ELISA 试剂盒"
          },
          {
            name: "细胞ELISA试剂盒",
            had: "细胞因子检测试剂盒"
          },
          {
            name: "其他",
            had: "肝纤维化检测 / 心肌梗塞检测 / 内分泌检测 / 自身免疫检测 / 肿瘤标志物检测 / 优生优育检测 / 流行症检测 / 特种蛋白检测 / 传染病检测"
          }
        ]
      },
      { 
        name: "科研技术服务",
        items: [
          {
            name: "分子生物学",
            had: "DNA测序 DNA提取/纯化  RT-PCR服务  RNAi全套服务  分子生物学载体构建"
          },
          {
            name: "细胞生物学",
            had: "细胞培养 流式细胞检测 细胞毒性测试 细胞生物学  干细胞服务"
          },
          {
            name: "蛋白质相关",
            had: "蛋白质组综合服务  蛋白制备  质谱服务  蛋白质相关 NMR分析"
          },
          {
            name: "免疫学",
            had: "抗体制备  抗体纯化 抗体标记 免疫组化/免疫沉淀/Western"
          },
          {
            name: "生物信息学",
            had: "生物信息学服务  生物信息学 代谢组学 其他"
          },
          {
            name: "生物芯片",
            had: "生物芯片制备 蛋白芯片服务 组织芯片服务 生物芯片"
          },
          {
            name: "微生物学",
            had: "微生物鉴定抑菌作用测试 内毒素测试 微生物学 发酵服务"
          },
          {
            name: "病理学",
            had: "病理学服务  组织学服务"
          },
          {
            name: "动物实验",
            had: "转基因动物定制  动物进出口  基因敲除  动物实验"
          },
          {
            name: "实验整体外包",
            had: "CRO综合服务 实验室定制服务 实验整体外包"
          }
        ]
      },
      { 
        name: "药物类",
        items: [
          {
            name: "制药原料",
            had: "化学合成药 / 天然化学药"
          }, {
            name: "植物",
            had: ""
          }
        ]
      }
    ];
    class Details extends React.Component {
      render() {
        console.log(this.props);
        return (
          <Menu style={{ width: "auto", borderRadius: "10px" }}>
            {this.props.data.map((item, index) => (
              <Menu.Item key={index}>
                <span style={{ fontWeight: "bold" }}>{item.name}</span>
                <span style={{ display: "inline-block", marginLeft: "20px" }}>
                  {item.had}
                </span>
              </Menu.Item>
            ))}
          </Menu>
        );
      }
    }
    return (
      <Menu className="navigator">
        {data.map((item, index) => (
          <Menu.Item key={index + 1}>
            <Dropdown
              placement="bottomLeft"
              overlay={<Details data={item.items} />}
              trigger={["click"]}
            >
              <span className="menu-name">{item.name}</span>
            </Dropdown>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
export default NavigatorBar;
