import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Studnet from './student.jsx'
import Faculty from './faculty.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Studnet/>
    <Faculty/>
  

  </React.StrictMode>,
)
