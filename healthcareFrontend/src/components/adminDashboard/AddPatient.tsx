// import Modal from '../shared/modal/Modal'
// import CloseMenu from '../../assets/closeMenu.svg?react'
// import Button from '../shared/Button/Button'
// import Input from '../shared/Input/Input'
// import PasswordField from '../shared/PasswordField/PasswordField'

// interface AddPatientProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const AddPatient = ({ isOpen, onClose }: AddPatientProps) => {
//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <div className=" h-150 overflow-y-auto">
//         <div className="px-5">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold">Add New Patient</h2>
//             <Button variant='btn' onClick={onClose}>
//               <CloseMenu className="w-6 h-6" />
//             </Button>
//           </div>

//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//               <Input
//                 label="First Name"
//                 name="firstName"
//                 type="text"
//                 placeholder="John"
//               />
//               <Input
//                 label="Last Name"
//                 name="lastName"
//                 type="text"
//                 placeholder="Doe"
//               />
//             </div>

//             <Input
//               label="Email"
//               name="email"
//               type="email"
//               placeholder="Enter patient's email"
//             />

//             <Input label="Date of Birth" name="email" type="date" />
//             <PasswordField
//               name="password"
//               label="Password"
//               placeholder="••••••••"
//             />

//             <Input label="Role" name="role" type="text" />

//             <Input
//               label="Status"
//               name="status"
//               placeholder="Enter patient's status"
//               type="text"
//             />

//             <Input
//               label="Phone Number"
//               name="contactNumber"
//               type="tel"
//               placeholder="Enter patient's contact number"
//             />

//             <Button type="submit" variant="active" className="mt-4 w-full">
//               Add Patient
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Modal>
//   )
// }

// export default AddPatient
