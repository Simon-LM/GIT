import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './composents/Header/Header'
import Home from './pages/Home'
import Footer from './composents/Footer/Footer'
import About from './pages/About/About'
import HousingInfo from './pages/Housing_information'
import Error404 from './pages/Error_404/Error_404'

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/about" element={<About />} />
          <Route path="/housinginformation" element={<HousingInfo />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
