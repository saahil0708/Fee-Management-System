import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function UpcomingEventsCard({ upcomingEvents = [] }) {
  // If no events, show empty state
  if (upcomingEvents.length === 0) {
    return (
      <Card className="border-0 shadow-xl bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calendar className="h-5 w-5 text-indigo-600" />
            </div>
            <span>Upcoming</span>
          </CardTitle>
          <CardDescription>Important dates and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4 text-sm text-gray-500">
            No upcoming events scheduled
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Calendar className="h-5 w-5 text-indigo-600" />
          </div>
          <span>Upcoming</span>
        </CardTitle>
        <CardDescription>Important dates and deadlines</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingEvents.map((event) => {
          // Safely handle event data with defaults
          const {
            id = Math.random().toString(36).substring(2, 9),
            title = "Untitled Event",
            date = "Date not specified",
            type = "general"
          } = event || {}

          // Determine badge variant based on type
          const badgeVariant = 
            type === "payment" ? "destructive" :
            type === "exam" ? "default" :
            "secondary"

          return (
            <div
              key={id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">{title}</p>
                <p className="text-xs text-gray-500 truncate">{date}</p>
              </div>
              <Badge variant={badgeVariant} className="whitespace-nowrap">
                {type}
              </Badge>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}