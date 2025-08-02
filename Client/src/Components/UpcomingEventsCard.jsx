import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function UpcomingEventsCard({ upcomingEvents }) {
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
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div>
              <p className="font-medium text-sm">{event.title}</p>
              <p className="text-xs text-gray-500">{event.date}</p>
            </div>
            <Badge variant={event.type === "payment" ? "destructive" : event.type === "exam" ? "default" : "secondary"}>
              {event.type}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
