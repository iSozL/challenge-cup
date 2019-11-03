import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/index'
function App() {
  return(
    <div>
      <Header />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
