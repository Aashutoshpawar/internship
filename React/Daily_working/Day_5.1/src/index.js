  import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './app2'
//pass { } named exprots
import {Sum} from './App';



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>

    <App>
      <h1>
        total sum is {Sum(100,200)}
      </h1>
      
    </App>
   
    <App2></App2>
  </React.StrictMode>
)