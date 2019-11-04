import React from 'react'
import PhotoList from '../../../../components/photoList'
class Promotion extends React.Component {
  render() {
    const list = [
      {
        name: require('../../../../assets/images/promotion1.png'),
      },
      {
        name: require('../../../../assets/images/promotion2.png'),
      },
      {
        name: require('../../../../assets/images/promotion3.png'),
      },
      {
        name: require('../../../../assets/images/promotion4.png'),
      }
    ]
    return (
      <PhotoList name="团购促销" slogan="绝对超值,有你想不到的优惠" photoList={list} />
    )
  }
}
export default Promotion