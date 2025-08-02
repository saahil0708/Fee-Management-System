import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download } from "lucide-react"
import { CustomButton } from "./CustomButton" // Using our custom button

export default function PaymentHistoryTab({ paymentHistory }) {
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
          {paymentHistory.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-2xl ${payment.status === "Paid" ? "bg-green-100" : "bg-orange-100"}`}>
                  <CreditCard
                    className={`h-5 w-5 ${payment.status === "Paid" ? "text-green-600" : "text-orange-600"}`}
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{payment.type}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{payment.date}</span>
                    {payment.method !== "-" && (
                      <>
                        <span>•</span>
                        <span>{payment.method}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">₹{payment.amount.toLocaleString()}</p>
                <div className="flex items-center justify-end space-x-2 mt-1">
                  <Badge
                    variant={payment.status === "Paid" ? "default" : "secondary"}
                    className={payment.status === "Paid" ? "bg-green-100 text-green-700 hover:bg-green-200" : ""}
                  >
                    {payment.status}
                  </Badge>
                  {payment.receipt !== "-" && (
                    <CustomButton variant="ghost" size="sm" className="hover:bg-blue-50">
                      <Download className="h-4 w-4 text-blue-600" />
                    </CustomButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
