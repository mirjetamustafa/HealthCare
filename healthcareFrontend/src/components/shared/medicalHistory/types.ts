export type HistoryType =
  | 'checkup'
  | 'condition'
  | 'medication'
  | 'test'
  | 'consultation'

export interface MedicalHistoryItem {
  id: string
  title: string
  description: string
  doctor: string
  date: string
  type: HistoryType
}
