import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
promise.then(response => {
  console.log(response)
})
const promise2 = axios.get('http://localhost:3001/foot')
console.log('promise2', promise2);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
