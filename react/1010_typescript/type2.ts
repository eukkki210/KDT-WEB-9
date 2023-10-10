// interface
interface Student {
  name: string
  grade: number
  isPassed: boolean
}

let persons: Student = {
  name: 'seunggi',
  grade: 3,
  isPassed: true
}

/* ---------------------------------------------------------------- */
// type
type Gender = 'Female' | 'Male' | 'Boy' | 'Girl'
const gender: Gender = 'Male'
