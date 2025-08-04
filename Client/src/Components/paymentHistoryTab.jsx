import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download } from "lucide-react"
import { CustomButton } from "./CustomButton"

export default function PaymentHistoryTab({ paymentHistory = [] }) {
  // If no payment history, show empty state
  if (paymentHistory.length === 0) {
    return (
      <Card className="border-0 shadow-xl bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>
            <span>Payment History</span>
          </CardTitle>
          <CardDescription>View all your fee payments and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-500">No payment history available</p>
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
            <CreditCard className="h-5 w-5 text-blue-600" />
          </div>
          <span>Payment History</span>
        </CardTitle>
        <CardDescription>View all your fee payments and transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentHistory.map((payment) => {
            // Safely handle payment data with defaults
            const {
              id = Math.random().toString(36).substring(2, 9),
              type = "Unknown Payment",
              status = "Pending",
              date = "Date not available",
              method = "-",
              amount = 0,
              receipt = "-"
            } = payment || {}

            // Determine status colors
            const isPaid = status.toLowerCase() === "paid"
            const statusBg = isPaid ? "bg-green-100" : "bg-orange-100"
            const statusText = isPaid ? "text-green-600" : "text-orange-600"
            const statusBadgeClass = isPaid 
              ? "bg-green-100 text-green-700 hover:bg-green-200" 
              : ""

            return (
              <div
                key={id}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl ${statusBg}`}>
                    <CreditCard className={`h-5 w-5 ${statusText}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{type}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{date}</span>
                      {method !== "-" && (
                        <>
                          <span>•</span>
                          <span>{method}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">₹{amount.toLocaleString('en-IN')}</p>
                  <div className="flex items-center justify-end space-x-2 mt-1">
                    <Badge
                      variant={isPaid ? "default" : "secondary"}
                      className={statusBadgeClass}
                    >
                      {status}
                    </Badge>
                    {receipt !== "-" && (
                      <CustomButton variant="ghost" size="sm" className="hover:bg-blue-50">
                        <Download className="h-4 w-4 text-blue-600" />
                      </CustomButton>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}