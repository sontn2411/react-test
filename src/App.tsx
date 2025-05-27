import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import { HelmetProvider } from 'react-helmet-async'
import About from './page/About'

function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App
