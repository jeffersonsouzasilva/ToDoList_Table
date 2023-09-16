import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import reportWebVitals from './pages/Gestor/Projetos';


import './index.css'
import GestorProjetos from './pages/Gestor/Projetos'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='gestorProjetos' element={ <GestorProjetos/> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();