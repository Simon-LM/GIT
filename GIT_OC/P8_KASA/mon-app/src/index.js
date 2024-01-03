import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.scss'
import App from './App'
import Error404 from './pages/Error_404/Error_404'
import Home from './pages/Home'
import Header from './composents/Header/Header'
import Footer from './composents/Footer/Footer'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/about" element={<Home />} />
        {/* <Route path="/header" element={<Header />} /> */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()
