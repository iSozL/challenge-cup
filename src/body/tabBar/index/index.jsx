import React from 'react'
import HeaderBar from './headerBar/index'
import Promotion from './promotion/index'
class Index extends React.Component {
  render() {
    return(
      <div>
        <HeaderBar />
        <Promotion />
      </div>
    )
  }
}
export default Index