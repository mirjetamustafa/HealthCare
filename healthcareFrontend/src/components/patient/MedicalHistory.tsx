import MedicalHstoryComponent from '../shared/medicalHistory/MedicalHstoryComponent'
import type { MedicalHistoryItem } from '../shared/medicalHistory/types'

const historyData: MedicalHistoryItem[] = [
  {
    id: '1',
    title: 'Annual Physical Examination',
    description:
      'Routine annual checkup. All vitals normal. Recommended continued exercise and healthy diet.',
    doctor: 'Amanda Foster',
    date: '1/15/2026',
    type: 'checkup',
  },
  {
    id: '2',
    title: 'Mild Hypertension',
    description:
      'Blood pressure slightly elevated at 140/90. Lifestyle modifications recommended.',
    doctor: 'Sarah Johnson',
    date: '11/20/2025',
    type: 'condition',
  },
  {
    id: '3',
    title: 'Lisinopril 10mg',
    description:
      'Once daily for blood pressure management. Follow up in 3 months.',
    doctor: 'Sarah Johnson',
    date: '11/20/2025',
    type: 'medication',
  },
  {
    id: '4',
    title: 'ECG Test',
    description:
      'Electrocardiogram performed. Results show normal sinus rhythm.',
    doctor: 'David Martinez',
    date: '8/10/2025',
    type: 'test',
  },
  {
    id: '5',
    title: 'Follow-up Consultation',
    description:
      'Review of blood work results. All markers within normal range.',
    doctor: 'Amanda Foster',
    date: '1/15/2026',
    type: 'checkup',
  },
]

const MedicalHistory = () => {
  return (
    <div className="py-5 md:py-13 px-5 md:px-20">
      <MedicalHstoryComponent data={historyData} />
    </div>
  )
}

export default MedicalHistory
