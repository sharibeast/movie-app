import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'
import { Recommendation } from './components/organisms/Recommendation'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home, { Movies } from './pages/Home'
import NotFound from './pages/NotFound'



const queryClient = new QueryClient()
function App() {
  return (

    <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Recommendation />} />
          <Route path='/movies' element={<Movies />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
