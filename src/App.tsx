
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontPage from './components/FrontPage'
import SavedPage from './components/SavedPage'
import Header from './components/Header'
import useJokes from './hooks/useJokes'

function App() {
  const { savedJokes, saveJoke } = useJokes()
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<>
          <FrontPage saveJoke={saveJoke} />
          </>} />
          <Route path='/saved' element={<>
            <SavedPage savedJokes={savedJokes} />
          </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
