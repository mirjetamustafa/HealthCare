import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header/Header'
import Landignpage from './pages/Landignpage'
import About from './pages/About'
import Footer from './components/footer/Footer'
import Services from './pages/Services'

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
                <Footer />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Header role="public" />
                <Services />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
