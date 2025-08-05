"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, Calendar, Filter, Search, Receipt } from "lucide-react"

export default function PaymentHistoryTab() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample payment data
  const [paymentHistory] = useState([
    {
      id: "PAY001",
      type: "Tuition Fee - Semester 1",
      status: "Paid",
      date: "2024-01-15",
      method: "Credit Card",
      amount: 45000,
      receipt: "REC001",
      semester: "Spring 2024",
    },
    {
      id: "PAY002",
      type: "Library Fee",
      status: "Paid",
      date: "2024-01-20",
      method: "UPI",
      amount: 2500,
      receipt: "REC002",
      semester: "Spring 2024",
    },
    {
      id: "PAY003",
      type: "Lab Fee - Computer Science",
      status: "Pending",
      date: "2024-02-01",
      method: "Bank Transfer",
      amount: 8000,
      receipt: "-",
      semester: "Spring 2024",
    },
    {
      id: "PAY004",
      type: "Hostel Fee",
      status: "Paid",
      date: "2024-01-10",
      method: "Debit Card",
      amount: 25000,
      receipt: "REC004",
      semester: "Spring 2024",
    },
    {
      id: "PAY005",
      type: "Examination Fee",
      status: "Overdue",
      date: "2024-01-25",
      method: "-",
      amount: 3500,
      receipt: "-",
      semester: "Spring 2024",
    },
  ])

  // Filter payments based on search and status
  const filteredPayments = paymentHistory.filter((payment) => {
    const matchesSearch =
      payment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.method.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || payment.status.toLowerCase() === filterStatus.toLowerCase()
    return matchesSearch && matchesStatus
  })

  // Calculate totals
  const totalPaid = paymentHistory
    .filter((p) => p.status.toLowerCase() === "paid")
    .reduce((sum, p) => sum + p.amount, 0)

  const totalPending = paymentHistory
    .filter((p) => p.status.toLowerCase() === "pending" || p.status.toLowerCase() === "overdue")
    .reduce((sum, p) => sum + p.amount, 0)

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700 hover:bg-green-200"
      case "pending":
        return "bg-orange-100 text-orange-700 hover:bg-orange-200"
      case "overdue":
        return "bg-red-100 text-red-700 hover:bg-red-200"
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }
  }

  const getStatusIconBg = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-50"
      case "pending":
        return "bg-orange-50"
      case "overdue":
        return "bg-red-50"
      default:
        return "bg-gray-50"
    }
  }

  const getStatusIconColor = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "text-green-600"
      case "pending":
        return "text-orange-600"
      case "overdue":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const handleDownloadReceipt = (receiptId) => {
    console.log(`Downloading receipt: ${receiptId}`)
    // Here you would implement the actual download logic
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700">Total Paid</p>
                <p className="text-2xl font-bold text-blue-900">₹{totalPaid.toLocaleString("en-IN")}</p>
              </div>
              <div className="p-3 bg-blue-200 rounded-xl">
                <CreditCard className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-700">Pending Amount</p>
                <p className="text-2xl font-bold text-orange-900">₹{totalPending.toLocaleString("en-IN")}</p>
              </div>
              <div className="p-3 bg-orange-200 rounded-xl">
                <Calendar className="h-6 w-6 text-orange-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-green-700">Total Transactions</p>
                <p className="text-2xl font-bold text-green-900">{paymentHistory.length}</p>
              </div>
              <div className="p-3 bg-green-200 rounded-xl">
                <Receipt className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Payment History Card */}
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
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search payments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>

          {/* Payment List */}
          {filteredPayments.length === 0 ? (
            <div className="text-center py-12">
              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No payment history found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start sm:items-center space-x-4 mb-4 sm:mb-0">
                    <div className={`p-3 rounded-xl ${getStatusIconBg(payment.status)}`}>
                      <CreditCard className={`h-5 w-5 ${getStatusIconColor(payment.status)}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-lg">{payment.type}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(payment.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        {payment.method !== "-" && (
                          <span className="flex items-center">
                            <CreditCard className="h-4 w-4 mr-1" />
                            {payment.method}
                          </span>
                        )}
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {payment.semester}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">₹{payment.amount.toLocaleString("en-IN")}</p>
                      <Badge className={getStatusBadgeClass(payment.status)}>{payment.status}</Badge>
                    </div>
                    {payment.receipt !== "-" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownloadReceipt(payment.receipt)}
                        className="hover:bg-blue-50 text-blue-600 hover:text-blue-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Receipt
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
