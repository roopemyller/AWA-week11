
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontPage from './components/FrontPage'
import SavedPage from './components/SavedPage'
import Header from './components/Header'
import useJokes from './hooks/useJokes'

function App() {
  const jokesHook = useJokes()
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<>
          <FrontPage {...jokesHook}/>
          </>} />
          <Route path='/saved' element={<>
            <SavedPage {...jokesHook} />
          </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
