import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header/Header'
import Landignpage from './pages/Landignpage'
import About from './pages/About'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header role="public" />
                <Landignpage />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Header role="public" />
                <About />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
