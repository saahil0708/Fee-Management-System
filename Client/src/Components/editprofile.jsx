"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Save, Upload, User } from "lucide-react"
import { CustomButton } from "./CustomButton"

export default function EditProfile() {
  // Default student data
  const defaultStudentData = {
    name: "John Doe",
    studentId: "STU001",
    email: "john.doe@example.com",
    course: "Computer Science",
    semester: "Fall 2023",
    gpa: "3.5",
    attendance: "85%",
    avatar: "/placeholder.svg"
  }

  const [formData, setFormData] = useState(defaultStudentData)
  const [errors, setErrors] = useState({})

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.course.trim()) newErrors.course = "Course is required"
    if (!formData.semester.trim()) newErrors.semester = "Semester is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    const gpaNum = Number.parseFloat(formData.gpa)
    if (formData.gpa && (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4)) {
      newErrors.gpa = "GPA should be between 0.0 and 4.0"
    }

    const attendanceNum = Number.parseFloat(formData.attendance.replace("%", ""))
    if (formData.attendance && (isNaN(attendanceNum) || attendanceNum < 0 || attendanceNum > 100)) {
      newErrors.attendance = "Attendance should be between 0% and 100%"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (validateForm()) {
      console.log("Profile saved:", {
        ...formData,
        attendance: formData.attendance.includes("%") ? formData.attendance : `${formData.attendance}%`,
      })
    }
  }

  const handleCancel = () => {
    console.log("Edit cancelled")
  }

  const getInitials = () => {
    try {
      return formData.name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0]?.toUpperCase() || "")
        .join("")
        .slice(0, 2)
    } catch {
      return "ST"
    }
  }

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <CustomButton variant="outline" onClick={handleCancel} className="p-2 h-10 w-10">
            <ArrowLeft className="h-4 w-4" />
          </CustomButton>
          <div>
            <CardTitle className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <span>Edit Profile</span>
            </CardTitle>
            <CardDescription>Update your personal and academic information</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24 ring-4 ring-blue-200 ring-offset-4">
              <AvatarImage src={formData.avatar} alt={formData.name} />
              <AvatarFallback className="text-2xl bg-blue-500 text-white">{getInitials()}</AvatarFallback>
            </Avatar>
            <CustomButton variant="outline" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Change Photo</span>
            </CustomButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`${errors.name ? "border-red-500" : ""}`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-sm font-semibold text-gray-700">
                Student ID
              </Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => handleInputChange("studentId", e.target.value)}
                placeholder="Enter student ID"
                disabled
                className="bg-gray-50"
              />
              <p className="text-xs text-gray-500">Student ID cannot be changed</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`${errors.email ? "border-red-500" : ""}`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="text-sm font-semibold text-gray-700">
                Course *
              </Label>
              <Input
                id="course"
                value={formData.course}
                onChange={(e) => handleInputChange("course", e.target.value)}
                className={`${errors.course ? "border-red-500" : ""}`}
                placeholder="Enter your course"
              />
              {errors.course && <p className="text-sm text-red-500">{errors.course}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="semester" className="text-sm font-semibold text-gray-700">
                Current Semester *
              </Label>
              <Input
                id="semester"
                value={formData.semester}
                onChange={(e) => handleInputChange("semester", e.target.value)}
                className={`${errors.semester ? "border-red-500" : ""}`}
                placeholder="Enter current semester"
              />
              {errors.semester && <p className="text-sm text-red-500">{errors.semester}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="gpa" className="text-sm font-semibold text-gray-700">
                GPA
              </Label>
              <Input
                id="gpa"
                value={formData.gpa}
                onChange={(e) => handleInputChange("gpa", e.target.value)}
                className={`${errors.gpa ? "border-red-500" : ""}`}
                placeholder="Enter GPA (0.0 - 4.0)"
              />
              {errors.gpa && <p className="text-sm text-red-500">{errors.gpa}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="attendance" className="text-sm font-semibold text-gray-700">
                Attendance
              </Label>
              <Input
                id="attendance"
                value={formData.attendance}
                onChange={(e) => handleInputChange("attendance", e.target.value)}
                className={`${errors.attendance ? "border-red-500" : ""}`}
                placeholder="Enter attendance percentage"
              />
              {errors.attendance && <p className="text-sm text-red-500">{errors.attendance}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <CustomButton
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </CustomButton>
            <CustomButton variant="outline" onClick={handleCancel} className="flex-1 border-gray-300 hover:bg-gray-50">
              Cancel
            </CustomButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}