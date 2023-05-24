import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='/*' element={<Home />}></Route>
    </Routes>
  )
}

export default App
