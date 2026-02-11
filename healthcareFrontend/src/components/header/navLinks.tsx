type IconName = 'user' | 'shield' | 'stethoscope'

export type NavLink = {
  to: string
  label: string
  icon?: IconName
}

export const publicLinks: NavLink[] = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/healthAdvice', label: 'Health Advice' },
  { to: '/bookAppointment', label: 'Book Appointment' },
  { to: '/contact', label: 'Contact' },
]

export const loginLink: NavLink[] = [
  { to: '/login', label: 'Login', icon: 'user' },
]

export const adminLinks: NavLink[] = [
  { to: '/admin', label: 'Admin', icon: 'shield' },
]

export const doctorLinks: NavLink[] = [
  { to: '/doctor', label: 'Doctor', icon: 'stethoscope' },
]

export const patientLinks: NavLink[] = [
  { to: '/patient', label: 'Patient', icon: 'user' },
]

export const footerLinks: NavLink[] = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/doctors', label: 'Find a Doctors' },
  { to: '/bookAppointment', label: 'Book Appointment' },
  { to: '/contact', label: 'Contact Us' },
]

export const recourcesLinks: NavLink[] = [
  { to: '/login', label: 'Patient Portal' },
  { to: '/labResult', label: 'Lab Results' },
  { to: '/login', label: 'Medical Records' },
  { to: '/bookAppointment', label: 'Schedule Visit' },
]

export const legal: NavLink[] = [
  { to: '/terms&conditions', label: 'Terms & Conditions' },
  { to: '/privacyPolicy', label: 'Privacy Policy' },
  { to: '/gdprCompliance', label: 'GDPR Compliance' },
]
