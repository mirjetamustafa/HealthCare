import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header/Header'
import Landignpage from './pages/Landignpage'
import About from './pages/About'
import Footer from './components/footer/Footer'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import HealthAdvice from './pages/HealthAdvice'
import ContactUs from './pages/ContactUs'
import AdminDashboard from './pages/AdminDashboard'
import DoctorsDashboard from './pages/DoctorsDashboard'
import Patient from './pages/Patient'
import Login from './pages/Login'
import AdminRegister from './pages/AdminRegister'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './lib/AuthContext'

function App() {
  return (
    <div className="">
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
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

            <Route
              path="/doctors"
              element={
                <>
                  <Header role="public" />
                  <Doctors />
                  <Footer />
                </>
              }
            />
            <Route
              path="/healthAdvice"
              element={
                <>
                  <Header role="public" />
                  <HealthAdvice />
                  <Footer />
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <Header role="public" />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <>
                  <Header role="admin" />
                  <AdminDashboard />
                  <Footer />
                </>
              }
            />

            <Route
              path="/doctorDashboard"
              element={
                <>
                  <Header role="doctor" />
                  <DoctorsDashboard />
                  <Footer />
                </>
              }
            />
            <Route
              path="/patient"
              element={
                <>
                  <Header role="patient" />
                  <Patient />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/adminRegister"
              element={
                <>
                  <AdminRegister />
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
