import Shield from '../../assets/shield.svg?react'
import Logout from '../../assets/logout.svg?react'
import Button from '../shared/Button/Button'
import { useAuthContext } from '../../lib/AuthContext'

const AdminHeader = () => {
  const { logout } = useAuthContext()
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-5 bg-white border-b border-gray-200 py-5 px-20">
      <div className="flex items-center gap-3">
        <div className="bg-red-100 p-3 rounded-full">
          <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B6B]" />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">System Management & Analytics</p>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <Button
          variant="default"
          className="hover:bg-gray-50 text-sm w-full md:w-auto"
          onClick={logout}
        >
          <Logout className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default AdminHeader
