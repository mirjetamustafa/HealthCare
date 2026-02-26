export type LabStatus = 'Completed' | 'Pending' | 'Processing'

export interface LabResult {
  id: string
  testName: string
  date: string
  status: LabStatus
  result?: string
}
