import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from './components/pages/Home'
import Destinos from './components/pages/Destinos'
import Contato from './components/pages/Contato'
import Viajem from './components/pages/Viajem'

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destinos" element={<Destinos />} />
        <Route path="/allusers" element={<Navigate to="/users" />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Viajem" element={<Viajem />} />
      </Routes>
    </Router>
  )
}

export default App
