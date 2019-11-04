import React from 'react'
import HeaderBar from './headerBar/index'
import Promotion from './promotion/index'
import New from './new/index'
class Index extends React.Component {
  render() {
    return(
      <div>
        <HeaderBar />
        <Promotion />
        <New />
      </div>
    )
  }
}
export default Index