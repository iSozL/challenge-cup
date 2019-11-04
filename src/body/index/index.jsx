import React from 'react'
import './index.css'
import SearchBar from '../../components/search/index'
import KeyWords from '../keyWords/index'
class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="header">
          <SearchBar />
          <KeyWords /> 
        </div>
      </div>
    )
  }
}
export default Body