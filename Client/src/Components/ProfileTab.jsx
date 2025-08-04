import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"
import { CustomButton } from "./CustomButton"

export default function ProfileTab({ studentData = {} }) {
  // Safely destructure with default values
  const {
    name = "Student Name",
    studentId = "N/A",
    gpa = "0.0",
    attendance = "0%",
    course = "Not Specified",
    semester = "Not Specified",
    email = "Not Available",
    avatar = "/placeholder.svg"
  } = studentData || {};

  // Generate avatar fallback initials safely
  const getInitials = () => {
    try {
      return name
        .split(" ")
        .filter(Boolean)
        .map(n => n[0]?.toUpperCase() || '')
        .join("")
        .slice(0, 2);
    } catch {
      return "ST";
    }
  };

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <span>Student Profile</span>
        </CardTitle>
        <CardDescription>Your personal and academic information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Profile Header Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
            <Avatar className="h-24 w-24 ring-4 ring-blue-200 ring-offset-4">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-2xl bg-blue-500 text-white">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
              <p className="text-blue-600 font-medium">{studentId}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  GPA: {gpa}
                </Badge>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                  Attendance: {attendance}
                </Badge>
              </div>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <label className="text-sm font-semibold text-blue-700">Course</label>
                <p className="text-lg font-medium text-gray-900">{course}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <label className="text-sm font-semibold text-green-700">Current Semester</label>
                <p className="text-lg font-medium text-gray-900">{semester}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-xl">
                <label className="text-sm font-semibold text-purple-700">Email</label>
                <p className="text-lg font-medium text-gray-900 break-all">{email}</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <label className="text-sm font-semibold text-orange-700">Student ID</label>
                <p className="text-lg font-medium text-gray-900">{studentId}</p>
              </div>
            </div>
          </div>

          <CustomButton 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <User className="mr-2 h-4 w-4" />
            Edit Profile
          </CustomButton>
        </div>
      </CardContent>
    </Card>
  )
}