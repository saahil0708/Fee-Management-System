import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Download, Eye, Award, FileText } from "lucide-react"
import { CustomButton } from "./CustomButton" // Using our custom button

export default function QuickActionsCard() {
  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <FileText className="h-5 w-5 text-emerald-600" />
          </div>
          <span>Quick Actions</span>
        </CardTitle>
        <CardDescription>Frequently used actions and services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CustomButton
            variant="outline"
            className="h-20 flex-col space-y-2 bg-white hover:bg-blue-50 border-blue-200 hover:border-blue-300 transition-all duration-300"
          >
            <Download className="h-5 w-5 text-blue-600" />
            <span className="text-xs">Download Receipt</span>
          </CustomButton>
          <CustomButton
            variant="outline"
            className="h-20 flex-col space-y-2 bg-white hover:bg-green-50 border-green-200 hover:border-green-300 transition-all duration-300"
          >
            <Eye className="h-5 w-5 text-green-600" />
            <span className="text-xs">Fee Structure</span>
          </CustomButton>
          <CustomButton
            variant="outline"
            className="h-20 flex-col space-y-2 bg-white hover:bg-purple-50 border-purple-200 hover:border-purple-300 transition-all duration-300"
          >
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-xs">Apply Scholarship</span>
          </CustomButton>
          <CustomButton
            variant="outline"
            className="h-20 flex-col space-y-2 bg-white hover:bg-orange-50 border-orange-200 hover:border-orange-300 transition-all duration-300"
          >
            <FileText className="h-5 w-5 text-orange-600" />
            <span className="text-xs">Fee Certificate</span>
          </CustomButton>
        </div>
      </CardContent>
    </Card>
  )
}
