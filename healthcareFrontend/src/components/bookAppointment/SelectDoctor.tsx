import Button from '../shared/Button/Button'
import { departament } from '../shared/categories'
import Select from '../shared/Select/Select'

interface SelectDoctorProps {
  setStep: () => void
}

const SelectDoctor = ({ setStep }: SelectDoctorProps) => {
  return (
    <div className="">
      <Select label="Department" options={departament} />

      <Select label="Doctor" options={departament} />
      <Button variant="active" className="w-full" onClick={() => setStep(2)}>
        Continue
      </Button>
    </div>
  )
}

export default SelectDoctor
