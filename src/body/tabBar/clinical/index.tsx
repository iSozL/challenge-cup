import * as React from 'react';
import { Card } from 'antd'
import './index.css'
interface Iprops {}
const Clinical: React.FC<Iprops> = (props) => {
  type Item = {
    name: string,
    items: string[]
  }
  const arr: Item[] = [
    {
      name: '内科', 
      items: ['呼吸内科','消化内科','神经内科','心血管内科','肾内科','血液内科','免疫科','内分泌科']
    },
    {
      name: '外科', 
      items: ['普通外科','神经外科','心胸外科','泌尿外科','心血管外科','乳腺外科','肝胆外科','烧伤科']
    },
    {
      name: '妇产科', 
      items: ['妇科','产科']
    },
    {
      name: '儿科',
      items: ['小儿内科','小二外科','新生儿外科']
    },
    {
      name: '五官科',
      items: ['耳鼻喉科','眼科','口腔科']
    },
    {
      name: '医学影像科',
      items: ['核医学科','放射科','超声科']
    }
  ]
  return (
    <div>
      <Card style={{marginBottom: 40, border: '5px solid #add8e6'}}>
        <div>
          {arr.map((item, index) => (
            <div key={index} className="cl-list-items">
              <span className='cl-item-name'>{item.name}</span>
              {item.items.map((lilitem, lilindex) => (
                <span className='cl-item' key={lilindex}>{lilitem}</span>
              ))}
            </div>
          ))}
        </div>
      </Card>
      <Card style={{marginBottom: 40, border: '5px solid #add8e6'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Card style={{height: 320, border: '5px solid green'}}>
            <div style={{fontSize: 30, padding: "0 50px"}}><p>呼</p><p>吸</p><p>内</p><p>科</p></div>
          </Card>
          <img style={{height: 320}} src={require('../../../assets/images/bl1.png')}></img>
          <img style={{height: 320}} src={require('../../../assets/images/bl2.png')}></img>
          <img style={{height: 320}} src={require('../../../assets/images/bl3.png')}></img>
        </div>
      </Card>
      <Card style={{marginBottom: 40, border: '5px solid #add8e6'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Card style={{height: 320, border: '5px solid green'}}>
            <div style={{fontSize: 30, padding: "0 50px"}}><p>血</p><p>管</p><p>内</p><p>科</p></div>
          </Card>
          <img style={{height: 320}} src={require('../../../assets/images/bl4.png')}></img>
          <img style={{height: 320}} src={require('../../../assets/images/bl5.png')}></img>
          <img style={{height: 320}} src={require('../../../assets/images/bl6.png')}></img>
        </div>
      </Card>
      <Card style={{marginBottom: 40, border: '5px solid #add8e6'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Card style={{height: 320, border: '5px solid green'}}>
            <div style={{fontSize: 30, padding: "0 50px"}}><p>影</p><p>像</p><p>科</p><p></p></div>
          </Card>
          <img style={{height: 320}} src={require('../../../assets/images/bl7.png')}></img>
          <img style={{height: 320}} src={require('../../../assets/images/bl8.png')}></img>
          <img style={{height: 320}} src={require('../../../assets/images/bl9.png')}></img>
        </div>
      </Card>
    </div>
  )
}
export default Clinical