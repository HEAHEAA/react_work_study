import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './_style/index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store.jsx";

//store 를 main.jsx 에 감싸 주었으니, 하위 컴포넌트들은 store을 맘대로 꺼내쓸수있다.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
