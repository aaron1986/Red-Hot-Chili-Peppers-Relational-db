import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rhcp from './Components/Rhcp.jsx'
import supabase from '../backend/supabase.client.js'
import './App.css'

function App() {
 
  console.log(supabase)

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
