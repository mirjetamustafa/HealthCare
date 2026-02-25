import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import Textarea from '../shared/Textarea/Textarea'

const ProfileDoctorDashboard = () => {
  return (
    <div className="py-5 md:pt-13 px-5 md:px-20">
      <div className="pb-9">
        <h2 className="text-2xl font-bold text-gray-900">Edit Your Profile</h2>
        <p className="text-gray-600 mt-1">
          Update your professional information and credentials
        </p>
      </div>

      <div className="bg-white shadow-xs rounded-lg p-9">
        <form className="space-y-6 ">
          <Input
            type="text"
            label="Full Name"
            placeholder="Dr. Sarah Johnson"
          />
          <Input
            type="text"
            label="Specialization"
            placeholder="Cardiologist"
          />
          <Textarea
            label="Professional Bio"
            placeholder="Board-certified cardiologist with 15 years of experience specializing in preventive cardiology and heart failure management."
            rows={5}
          />
          <Input
            type="email"
            label="Email"
            placeholder="dr.johnson@medicare.com"
          />
          <Input type="tel" label="Phone Number" placeholder="(123) 456-7890" />
          <div className="flex gap-2 border-t border-gray-200 pt-5 mt-9 ">
            <Button variant="active" type="submit">
              Save Changes
            </Button>
            <Button
              variant="default"
              type="button"
              className="hover:bg-gray-100"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileDoctorDashboard
