import React from 'react'
import HeaderBar from './headerBar/index'
import Promotion from './promotion/index'
import New from './new/index'
import Share from './share/index'
import Point from './point/index'
import Talk from './talk/index'
class Index extends React.Component {
  render() {
    return(
      <div className="index-container">
        <HeaderBar />
        <Share />
        <Point />
        <Talk />
      </div>
    )
  }
}
export default Index
