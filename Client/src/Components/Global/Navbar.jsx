import { Bell, GraduationCap } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { CustomButton } from "../CustomButton";

export default function Header({ studentData = {} }) {
  // Provide default values
  const { 
    Avatar: avatarUrl = "/placeholder.svg", 
    name = "Student" 
  } = studentData || {};

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EduPortal</h1>
              <p className="text-xs text-gray-500">Student Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* <CustomButton variant="ghost" size="icon" className="relative hover:bg-blue-50"> */}
              <Bell className="h-5 w-5" />
            {/* </CustomButton> */}
            <Avatar className="ring-2 ring-blue-200 ring-offset-2">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback className="bg-blue-500 text-white">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}