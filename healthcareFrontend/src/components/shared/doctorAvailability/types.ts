export type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export interface DayAvailability {
  enabled: boolean
  from: string
  to: string
}

export type Availability = Record<Day, DayAvailability>
