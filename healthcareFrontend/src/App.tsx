import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './lib/AuthContext'
import { useDoctors } from './components/hook/useDoctors'
import { createRoutes } from './routes/Routes'

function AppRoutes(props: any) {
  return useRoutes(createRoutes(props))
}

function App() {
  const doctorsData = useDoctors()
  return (
    <div className="">
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes {...doctorsData} />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
