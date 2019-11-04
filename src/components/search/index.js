import React from "react";
import { Input, Button } from "antd";
import './index.css'
class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <Input
          placeholder="请输入..."
          style={{ width: 600, border: 'solid 1px #3dc6b6' }}
        />
        <Button style={{ background: '#3dc6b6', color: '#ffffff' }}>搜索</Button>
      </div>
    );
  }
}
export default SearchBar;
