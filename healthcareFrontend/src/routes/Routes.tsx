import type { RouteObject } from 'react-router-dom'
import Header from '../components/header/Header'
import Landignpage from '../pages/Landignpage'
import Footer from '../components/footer/Footer'
import About from '../pages/About'
import Services from '../pages/Services'
import Doctors from '../pages/Doctors'
import HealthAdvice from '../pages/HealthAdvice'
import BookAppointment from '../pages/BookAppointment'
import ContactUs from '../pages/ContactUs'
import Register from '../pages/Register'
import Login from '../pages/Login'
import AdminDashboard from '../pages/AdminDashboard'
import DoctorsDashboard from '../pages/DoctorsDashboard'
import Patient from '../pages/Patient'
import type { DoctorResponse } from '../api/User/user.types'
import AuthenticationRoute from './AuthenticationRoute'

export enum RouteType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

interface Props {
  doctors: DoctorResponse[]
  filteredDoctors: DoctorResponse[]
  departments: { label: string; value: string }[]
  setSelectedDepartment: (value: string) => void
  handleDeleteDoctor: (id: string) => void
  fetchDoctors: () => void
  handleEdit: (doctor: DoctorResponse) => void
  editDoctor: DoctorResponse | null
  handleCreate: () => void
}
export const createRoutes = (props: Props): RouteObject[] => [
  {
    element: <AuthenticationRoute routeType={RouteType.PUBLIC} />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Header role="public" />
            <Landignpage />
            <Footer />
          </>
        ),
      },
      {
        path: '/about',
        element: (
          <>
            <Header role="public" />
            <About />
            <Footer />
          </>
        ),
      },

      {
        path: '/services',
        element: (
          <>
            <Header role="public" />
            <Services />
            <Footer />
          </>
        ),
      },

      {
        path: '/doctors',
        element: (
          <>
            <Header role="public" />
            <Doctors
              filteredDoctors={props.filteredDoctors}
              departments={props.departments}
              setSelectedDepartment={props.setSelectedDepartment}
            />
            <Footer />
          </>
        ),
      },

      {
        path: '/healthAdvice',
        element: (
          <>
            <Header role="public" />
            <HealthAdvice />
            <Footer />
          </>
        ),
      },

      {
        path: '/bookAppointment',
        element: (
          <>
            <Header role="public" />
            <BookAppointment doctors={props.doctors} />
            <Footer />
          </>
        ),
      },

      {
        path: '/contact',
        element: (
          <>
            <Header role="public" />
            <ContactUs />
            <Footer />
          </>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/register',
        element: <Register />,
      },
    ],
  },

  {
    element: <AuthenticationRoute routeType={RouteType.PRIVATE} />,
    children: [
      {
        path: '/admin',
        element: (
          <>
            <Header role="admin" />
            <AdminDashboard
              doctors={props.filteredDoctors}
              onDeleteDoctor={props.handleDeleteDoctor}
              fetchDoctors={props.fetchDoctors}
              handleEdit={props.handleEdit}
              editDoctor={props.editDoctor}
              addDoctor={props.handleCreate}
            />

            <Footer />
          </>
        ),
      },
      {
        path: '/doctorDashboard',
        element: (
          <>
            <Header role="doctor" />
            <DoctorsDashboard />
            <Footer />
          </>
        ),
      },

      {
        path: '/patient',
        element: (
          <>
            <Header role="patient" />
            <Patient />
            <Footer />
          </>
        ),
      },
    ],
  },
]
