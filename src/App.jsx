import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { routes } from './routes'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        <Route path= '*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
