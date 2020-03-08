import React from 'react'
import Header from '../index/headerBar/index'
import './index.css'
import { Layout } from 'antd'
import Shops from '../businessIntroduction/shopTabs/index'
import Recommand from '../businessIntroduction/recommend'
const { Sider, Content } = Layout;
interface Iprops {

}
const Shared: React.FC<Iprops> = props => {
  const photos: Array<object> = [
    {
      name: require('../../../assets/images/zy.png')
    },
    {
      name: require('../../../assets/images/z2.png')
    },
    {
      name: require('../../../assets/images/z3.png')
    },
    {
      name: require('../../../assets/images/z4.png')
    },
    {
      name: require('../../../assets/images/z5.png')
    },
    {
      name: require('../../../assets/images/zx6.png')
    },
    {
      name: require('../../../assets/images/z7.png')
    },
  ]
  type Item = {
    name: string,
    items: string[]
  }
  const arr: Item[] = [
    {
      name: '按学科分类', 
      items: ['病理', '生化', '生理', '病生', '微生物', '寄生虫', '药理', '影像']
    },
    {
      name: '按实验性质', 
      items: ['动物实验', '细胞实验']
    },
    {
      name: '按时间', 
      items: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
  ]
  const List = () => {
    return (
      <div className='list'>
        {arr.map((item, index) => (
          <div key={index} className="list-items">
            <span className='item-name'>{item.name}</span>
            {item.items.map((lilitem, lilindex) => (
              <span className='item' key={lilindex}>{lilitem}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
      <Header photoArray={photos} />
      <Layout>
        <Content>
          {/* <List /> */}
          <div style={{border: '5px solid gold', borderRadius: '10px'}}>
            <Shops />
          </div>
        </Content>
        <Sider width={270} style={{marginTop: "20px", background: '#f0f2f5'}}>
          <div>
            <Recommand />
          </div>
        </Sider>
      </Layout>
    </div>
  )
}
export default Shared