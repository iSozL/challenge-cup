import React from 'react'
import './index.css'
import SearchBar from '../../components/search/index'
import KeyWords from '../keyWords/index'
import TabBar from '../tabBar/index'
import Footer from '../../footer/index'
class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="white-block"></div>
        <div className="header">
          <SearchBar />
          <KeyWords />
        </div>
        <div className="tab-width">
          <TabBar />
        </div>
        <Footer />
      </div>
    )
  }
}
export default Body