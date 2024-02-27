import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import './index.css'
import {SerchContext} from "./component/context/SerchContext";
ReactDOM.createRoot(document.getElementById('root')).render(
<SerchContext>
<App />
</SerchContext>
  

)
