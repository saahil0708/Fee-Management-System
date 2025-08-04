import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

// Default notification icon fallback
const DefaultIcon = Bell;

export default function NotificationsTab({ notifications = [] }) {
  // If no notifications, show empty state
  if (notifications.length === 0) {
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
          <div className="text-center py-8">
            <p className="text-gray-500">No notifications available</p>
          </div>
        </CardContent>
      </Card>
    )
  }

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
            // Safely handle icon component
            const IconComponent = notification.icon || DefaultIcon;
            // Default type to 'info' if not specified
            const type = notification.type || 'info';
            // Generate safe date display
            const displayDate = notification.date || 'No date specified';

            return (
              <div
                key={notification.id || Math.random().toString(36).substring(2, 9)}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-2xl ${
                    type === "warning"
                      ? "bg-orange-100"
                      : type === "success"
                        ? "bg-green-100"
                        : "bg-blue-100"
                  }`}
                >
                  <IconComponent
                    className={`h-5 w-5 ${
                      type === "warning"
                        ? "text-orange-600"
                        : type === "success"
                          ? "text-green-600"
                          : "text-blue-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {notification.message || 'No message content'}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{displayDate}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    type === "warning"
                      ? "border-orange-200 text-orange-700"
                      : type === "success"
                        ? "border-green-200 text-green-700"
                        : "border-blue-200 text-blue-700"
                  }`}
                >
                  {type}
                </Badge>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}