import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

export default function NotificationsTab({ notifications }) {
  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bell className="h-5 w-5 text-blue-600" />
          </div>
          <span>All Notifications</span>
        </CardTitle>
        <CardDescription>Stay updated with important announcements and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <div
                key={notification.id}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-2xl ${
                    notification.type === "warning"
                      ? "bg-orange-100"
                      : notification.type === "success"
                        ? "bg-green-100"
                        : "bg-blue-100"
                  }`}
                >
                  <IconComponent
                    className={`h-5 w-5 ${
                      notification.type === "warning"
                        ? "text-orange-600"
                        : notification.type === "success"
                          ? "text-green-600"
                          : "text-blue-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    notification.type === "warning"
                      ? "border-orange-200 text-orange-700"
                      : notification.type === "success"
                        ? "border-green-200 text-green-700"
                        : "border-blue-200 text-blue-700"
                  }`}
                >
                  {notification.type}
                </Badge>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
