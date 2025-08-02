import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CreditCard, TrendingUp } from "lucide-react"
import { CustomButton } from "./CustomButton" // Using our custom button

export default function FeeProgressCard({ feeData, progressPercentage }) {
  return (
    <Card className="lg:col-span-2 border-0 shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </div>
          <span>Fee Payment Progress</span>
        </CardTitle>
        <CardDescription>Track your fee payment status for this academic year</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span>Overall Progress</span>
            <span className="text-blue-600">{progressPercentage.toFixed(1)}%</span>
          </div>
          <div className="relative">
            <Progress value={progressPercentage} className="h-3 bg-gray-100" />
            <div
              className="absolute inset-0 bg-blue-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <p className="text-sm text-green-600 font-medium">Paid</p>
            <p className="text-lg font-bold text-green-700">₹{feeData.paidAmount.toLocaleString()}</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-xl">
            <p className="text-sm text-orange-600 font-medium">Pending</p>
            <p className="text-lg font-bold text-orange-700">₹{feeData.pendingAmount.toLocaleString()}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-sm text-purple-600 font-medium">Scholarship</p>
            <p className="text-lg font-bold text-purple-700">₹{feeData.scholarshipAmount.toLocaleString()}</p>
          </div>
        </div>

        <CustomButton
          className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Pay Remaining Amount
        </CustomButton>
      </CardContent>
    </Card>
  )
}
