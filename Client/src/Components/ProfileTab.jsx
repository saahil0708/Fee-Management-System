"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react";
import SaveButton from '../Utils/SaveButton';

export default function ProfileTab() {
  const [isEditing, setIsEditing] = useState(false)
  const [currentStudentData, setCurrentStudentData] = useState({
    name: "John Doe",
    studentId: "STU001",
    gpa: "3.8",
    attendance: "95%",
    course: "Computer Science",
    semester: "Fall 2024",
    email: "john.doe@university.edu",
    avatar: "/placeholder.svg?height=96&width=96",
  })

  // Generate avatar fallback initials safely
  const getInitials = () => {
    try {
      return currentStudentData.name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0]?.toUpperCase() || "")
        .join("")
        .slice(0, 2)
    } catch {
      return "ST"
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveProfile = (updatedData) => {
    setCurrentStudentData(updatedData)
    setIsEditing(false)
    console.log("Profile updated:", updatedData)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  // Show edit profile component if in editing mode
  if (isEditing) {
    return (
      <Card className="border-0 shadow-xl bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <span>Edit Profile</span>
          </CardTitle>
          <CardDescription>Update your personal and academic information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={currentStudentData.name}
                  onChange={(e) => setCurrentStudentData({ ...currentStudentData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  value={currentStudentData.studentId}
                  onChange={(e) => setCurrentStudentData({ ...currentStudentData, studentId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Course</label>
                <input
                  type="text"
                  value={currentStudentData.course}
                  onChange={(e) => setCurrentStudentData({ ...currentStudentData, course: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Semester</label>
                <input
                  type="text"
                  value={currentStudentData.semester}
                  onChange={(e) => setCurrentStudentData({ ...currentStudentData, semester: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={currentStudentData.email}
                  onChange={(e) => setCurrentStudentData({ ...currentStudentData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">GPA</label>
                <input
                  type="text"
                  value={currentStudentData.gpa}
                  onChange={(e) => setCurrentStudentData({ ...currentStudentData, gpa: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <SaveButton
                onClick={() => handleSaveProfile(currentStudentData)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Save Changes
              </SaveButton>
              <Button
                onClick={handleCancelEdit}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show profile view
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
              <AvatarImage src={currentStudentData.avatar || "/placeholder.svg"} alt={currentStudentData.name} />
              <AvatarFallback className="text-2xl bg-blue-500 text-white">{getInitials()}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{currentStudentData.name}</h3>
              <p className="text-blue-600 font-medium">{currentStudentData.studentId}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">GPA: {currentStudentData.gpa}</Badge>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                  Attendance: {currentStudentData.attendance}
                </Badge>
              </div>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <label className="text-sm font-semibold text-blue-700">Course</label>
                <p className="text-lg font-medium text-gray-900">{currentStudentData.course}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <label className="text-sm font-semibold text-green-700">Current Semester</label>
                <p className="text-lg font-medium text-gray-900">{currentStudentData.semester}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-xl">
                <label className="text-sm font-semibold text-purple-700">Email</label>
                <p className="text-lg font-medium text-gray-900 break-all">{currentStudentData.email}</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <label className="text-sm font-semibold text-orange-700">Student ID</label>
                <p className="text-lg font-medium text-gray-900">{currentStudentData.studentId}</p>
              </div>
            </div>
          </div>

          <Button
            onClick={handleEditClick}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <User className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
