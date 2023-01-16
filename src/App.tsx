import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './components/organisms/MovieDetail'
import { Recommendation } from './components/organisms/Recommendation'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home, { Movies } from './pages/Home'
import MovieSearchResult from './pages/MovieSearchResult'
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
          <Route path='/movies/:id' element={<MovieDetail />} />
          <Route path='/:id/*' element={<MovieDetail />} />
          <Route path="/results" element={<MovieSearchResult />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
