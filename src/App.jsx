import React from 'react'
import Nav from './Components/Nav'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Login from './pages/Login'
import CarsDetails from './pages/CarsDetails'


const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
         <Route path="/"element={<Home />} />
         <Route path="/cars"element={<Cars />} />
         <Route path="/login"element={<Login />} />
         <Route path="/cars/:id"element={<CarsDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App