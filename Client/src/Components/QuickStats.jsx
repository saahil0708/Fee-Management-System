import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, CreditCard, FileText, Award } from "lucide-react"

export default function QuickStats({ 
  feeData = {}, 
  studentData = {}, 
  progressPercentage = 0 
}) {
  // Provide default values for feeData properties
  const {
    totalFees = 0,
    paidAmount = 0,
    pendingAmount = 0,
    dueDate = "N/A",
    scholarshipAmount = 0
  } = feeData || {};

  // Calculate pending amount if not provided
  const calculatedPending = pendingAmount || (totalFees - paidAmount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="border-0 shadow-lg bg-emerald-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-emerald-700">Total Fees</CardTitle>
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Wallet className="h-4 w-4 text-emerald-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-800">₹{totalFees.toLocaleString()}</div>
          <p className="text-xs text-emerald-600 mt-1">Academic Year 2024</p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-green-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-700">Paid Amount</CardTitle>
          <div className="p-2 bg-green-100 rounded-lg">
            <CreditCard className="h-4 w-4 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-800">₹{paidAmount.toLocaleString()}</div>
          <p className="text-xs text-green-600 mt-1">{progressPercentage.toFixed(1)}% completed</p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-orange-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-orange-700">Pending Amount</CardTitle>
          <div className="p-2 bg-orange-100 rounded-lg">
            <FileText className="h-4 w-4 text-orange-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-800">₹{calculatedPending.toLocaleString()}</div>
          <p className="text-xs text-orange-600 mt-1">Due: {dueDate}</p>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-purple-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-purple-700">Scholarship</CardTitle>
          <div className="p-2 bg-purple-100 rounded-lg">
            <Award className="h-4 w-4 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-800">₹{scholarshipAmount.toLocaleString()}</div>
          <Badge className="mt-1 bg-purple-100 text-purple-700 hover:bg-purple-200">Merit Based</Badge>
        </CardContent>
      </Card>
    </div>
  )
}