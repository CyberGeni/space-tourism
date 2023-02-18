import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Technology from './pages/Technology'

function App() {

  return (
    <div className="App font-Bellefair">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew/>} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
