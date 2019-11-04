import React from 'react'
import PhotoList from '../../../../components/photoList'
function New() {
  const list = [
    {
      name: require('../../../../assets/images/new1.png'),
    },
    {
      name: require('../../../../assets/images/new2.png'),
    },
    {
      name: require('../../../../assets/images/new3.png'),
    },
    {
      name: require('../../../../assets/images/new4.png'),
    }
  ]
  return(
    <PhotoList name="新品上市" slogan="精心挑选,想不到的惊喜" photoList={list} />
  )
}
export default New