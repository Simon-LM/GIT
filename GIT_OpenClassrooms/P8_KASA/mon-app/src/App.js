import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import HousingInfo from './pages/Housing_pages/Housing_pages'
import Error404 from './pages/Error_404/Error_404'

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/error404" />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<HousingInfo />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
