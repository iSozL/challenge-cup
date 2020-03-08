import React from 'react'
import Header from '../index/headerBar/index'
import './index.css'
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
      name: require('../../../assets/images/z6.png')
    },
    {
      name: require('../../../assets/images/z7.png')
    },
  ]
  return (
    <div>
      <Header photoArray={photos} />
    </div>
  )
}
export default Shared