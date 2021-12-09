import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import Store from  "./app/Store"
import {BrowserRouter as Router} from 'react-router-dom';

const routing =(
  
  <Router>
   <Provider store={Store}> 
    <App/>
   </Provider>
  </Router>
 
)


ReactDOM.render(

routing,
 
  document.getElementById('root')
);

