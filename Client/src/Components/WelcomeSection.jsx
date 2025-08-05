import { Calendar, TrendingUp } from "lucide-react"

export default function WelcomeSection({ studentData = {} }) {
  // Provide default values for all studentData properties
  const {
    name = "Student",
    course = "Undefined Course",
    semester = "Undefined Semester",
    studentId = "N/A",
    gpa = "0.0",
    attendance = "0%"
  } = studentData || {};

  return (
    <div className="mb-8 relative">
      <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {name}! 👋</h2>
          <p className="text-blue-100 mb-4">
            {course} • {semester} • ID: {studentId}
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>GPA: {gpa}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Attendance: {attendance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}