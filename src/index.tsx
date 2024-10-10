import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.css';
import './assets/scss/style.scss';
import {TodoListPage} from "./pages/TodoListPage";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <TodoListPage/>
  </React.StrictMode>
);


