import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/index'
import Body from './body/index/index'
function App() {
  return(
    <div>
      <Header />
      <Body>
      </Body>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
