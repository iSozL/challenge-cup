import React from 'react'
import './index.css'
import SearchBar from '../../components/search/index'
class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <SearchBar />
      </div>
    )
  }
}
export default Body