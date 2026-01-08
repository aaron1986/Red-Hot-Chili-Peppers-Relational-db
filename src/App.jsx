import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rhcp from './Components/Rhcp.jsx'
import './App.css'

function App() {
 

  return (
 <>
    <Router>
      <Routes>
        <Route path="/" element={<Rhcp/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
