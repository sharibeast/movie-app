import { Routes, Route } from 'react-router-dom'
import { Recommendation } from './components/organisms/Recommendation'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home, { Movies  } from './pages/Home'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Home />} >
        <Route path='/' element={<Recommendation />} />
        <Route path='/movies' element={<Movies />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
