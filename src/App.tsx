
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontPage from './components/FrontPage'
import SavedPage from './components/SavedPage'
import useJokes from './hooks/useJokes'
import Header from './components/Header'

function App() {
  const { savedJokes, saveJoke } = useJokes()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Header />
          <FrontPage savedJokes={savedJokes} saveJoke={saveJoke} />
          </>} />
          <Route path='/saved' element={<>
            <Header />
            <SavedPage savedJokes={savedJokes} />
          </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
