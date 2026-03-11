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
import { toast, ToastContainer } from 'react-toastify'
import { AuthProvider } from './lib/AuthContext'

import { useEffect, useState } from 'react'
import type { DoctorResponse } from './api/User/user.types'
import { deleteDoctor, getDoctors } from './api/User/user'
import Register from './pages/Register'

function App() {
  const [doctors, setDoctors] = useState<DoctorResponse[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [editDoctor, setEditDoctor] = useState<DoctorResponse | null>(null)
  const [open, setOpen] = useState(false)

  const fetchDoctors = async () => {
    try {
      const response = await getDoctors()
      setDoctors(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  const handleDeleteDoctor = async (id: string) => {
    try {
      await deleteDoctor(id)
      toast.success('Doctor deleted successfully')
      fetchDoctors()
    } catch (error) {
      toast.error('Failed to delete doctor')
      console.error(error)
    }
  }

  const handleCreate = () => {
    setEditDoctor(null)
    setOpen(true)
  }

  const handleEdit = (doctor: DoctorResponse) => {
    setEditDoctor(doctor)
    setOpen(true)
  }

  const formatText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

  const departments = [
    { label: 'All Departments', value: 'all' },
    ...Array.from(new Set(doctors.map((doctor) => doctor.department))).map(
      (department) => ({
        label: formatText(department),
        value: department,
      }),
    ),
  ]

  const filteredDoctors =
    selectedDepartment === 'all'
      ? doctors
      : doctors.filter((doctor) => doctor.department === selectedDepartment)
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
                  <Doctors
                    filteredDoctors={filteredDoctors}
                    departments={departments}
                    setSelectedDepartment={setSelectedDepartment}
                  />
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
                  <AdminDashboard
                    doctors={filteredDoctors}
                    onDeleteDoctor={handleDeleteDoctor}
                    fetchDoctors={fetchDoctors}
                    handleEdit={handleEdit}
                    editDoctor={editDoctor}
                    addDoctor={handleCreate}
                  />
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
              path="/register"
              element={
                <>
                  <Register />
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
