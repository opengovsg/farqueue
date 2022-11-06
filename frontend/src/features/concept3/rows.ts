import { PatientRowProps } from './PatientRow'

// Fake data here
export const rows: PatientRowProps[] = [
  {
    name: 'Harriet Loo',
    uin: 'S1234567A',
    wait: '14 min ago',
    location: 'Gastroenterology Dept.',
    isContactable: true,
    isSeeingDoctor: true,
  },
  {
    name: 'Scarlett Red',
    uin: 'S26028342B',
    wait: '19 min ago',
    location: 'Radiology Dept.',
    isContactable: false,
    isSeeingDoctor: true,
  },
  {
    name: 'Bustard Lee',
    uin: 'T1234567A',
    wait: '31 min ago',
    location: 'Pharmacy',
    isContactable: false,
    isSeeingDoctor: false,
  },
  {
    name: 'Bob Tan',
    uin: 'T1238120B',
    wait: '45 min ago',
    location: 'Observation',
    isContactable: true,
    isSeeingDoctor: false,
  },
]
