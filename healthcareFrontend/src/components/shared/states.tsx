import OclockIcon from '../../assets/oclock.svg?react'
import Users from '../../assets/users.svg?react'
import ShieldTick from '../../assets/shieldTick.svg?react'

import type { ComponentType, SVGProps } from 'react'

export type StatItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  value: string
  label: string
}

export const states: StatItem[] = [
  { icon: OclockIcon, value: '25+', label: 'Years of Excellence' },
  { icon: Users, value: '50K+', label: 'Happy Patients' },
  { icon: ShieldTick, value: '100+', label: 'Expert Doctors' },
]
