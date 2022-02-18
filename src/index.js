import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Alexey'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Nastya'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Kirill'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you?'}
]

let postsData = [
    {id: 1, message: 'Hello, World!', likesCount: '42'},
    {id: 2, message: 'It\'s my first post', likesCount: '21'},
    //{id: 3, mem: {<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}, likesCount: '10'}
]

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
