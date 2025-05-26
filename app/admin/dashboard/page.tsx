"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  Download,
  Eye,
  Search,
  Filter
} from "lucide-react"

interface Registration {
  _id: string
  registrationId: string
  participantName: string
  email: string
  mobileNumber: string
  country: string
  category: string
  ieeeStatus: string
  nationality: string
  paperId: string
  calculatedFee: number
  currency: string
  paymentStatus: string
  paymentId: string
  registrationDate: string
  paymentProofUrl?: string
  ieeeProofUrl?: string
}

interface DashboardData {
  totalRegistrations: number
  completedPayments: number
  totalAmount: number
  categoryBreakdown: Record<string, number>
  ieeeBreakdown: Record<string, number>
  recentRegistrations: Registration[]
  allRegistrations: Registration[]
}

export default function AdminDashboard() {
  const [pin, setPin] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const { toast } = useToast()

  const handleLogin = async () => {
    if (!pin) {
      toast({
        title: "Error",
        description: "Please enter the admin PIN",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/admin/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      })

      const data = await response.json()

      if (response.ok) {
        setIsAuthenticated(true)
        setDashboardData(data.data)
        toast({
          title: "Success",
          description: "Logged in successfully"
        })
      } else {
        toast({
          title: "Error",
          description: data.error || "Invalid PIN",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to authenticate",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const exportToCSV = () => {
    if (!dashboardData) return

    const headers = [
      'Registration ID',
      'Name',
      'Email',
      'Mobile',
      'Country',
      'Category',
      'IEEE Status',
      'Nationality',
      'Paper ID',
      'Fee',
      'Currency',
      'Payment Status',
      'Payment ID',
      'Registration Date'
    ]

    const csvContent = [
      headers.join(','),
      ...dashboardData.allRegistrations.map(reg =>
        [
          reg.registrationId,
          reg.participantName,
          reg.email,
          reg.mobileNumber,
          reg.country,
          reg.category,
          reg.ieeeStatus,
          reg.nationality,
          reg.paperId,
          reg.calculatedFee,
          reg.currency,
          reg.paymentStatus,
          reg.paymentId,
          new Date(reg.registrationDate).toLocaleDateString()
        ].join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `resgenxai-registrations-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const filteredRegistrations = dashboardData?.allRegistrations.filter(reg => {
    const matchesSearch = reg.participantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.registrationId.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = filterCategory === "all" || reg.category === filterCategory

    return matchesSearch && matchesCategory
  }) || []

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-900 to-secondary-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
            <p className="text-gray-600">Enter PIN to access dashboard</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pin">Admin PIN</Label>
              <Input
                id="pin"
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter admin PIN"
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button 
              onClick={handleLogin} 
              disabled={loading}
              className="w-full"
            >
              {loading ? "Authenticating..." : "Login"}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ResGenXAI 2025</h1>
              <p className="text-gray-600">Conference Registration Dashboard</p>
            </div>
            <Button onClick={exportToCSV} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.totalRegistrations}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.completedPayments}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{dashboardData.totalAmount.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">IEEE Members</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.ieeeBreakdown['IEEE Members'] || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="registrations">All Registrations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(dashboardData.categoryBreakdown).map(([category, count]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="capitalize">{category}</span>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Registrations */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.recentRegistrations.slice(0, 5).map((reg) => (
                      <div key={reg._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{reg.participantName}</p>
                          <p className="text-sm text-gray-600">{reg.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{reg.calculatedFee} {reg.currency}</p>
                          <Badge variant={reg.paymentStatus === 'completed' ? 'default' : 'secondary'}>
                            {reg.paymentStatus}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="registrations" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search by name, email, or registration ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="sm:w-48">
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="all">All Categories</option>
                      <option value="student">Student</option>
                      <option value="academician">Academician</option>
                      <option value="industry">Industry</option>
                      <option value="attendee-student">Attendee - Student</option>
                      <option value="attendee-academician">Attendee - Academician</option>
                      <option value="attendee-industry">Attendee - Industry</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registrations Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Registrations ({filteredRegistrations.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Registration ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>IEEE</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRegistrations.map((reg) => (
                        <TableRow key={reg._id}>
                          <TableCell className="font-medium">{reg.registrationId}</TableCell>
                          <TableCell>{reg.participantName}</TableCell>
                          <TableCell>{reg.email}</TableCell>
                          <TableCell className="capitalize">{reg.category}</TableCell>
                          <TableCell>
                            <Badge variant={reg.ieeeStatus === 'yes' ? 'default' : 'secondary'}>
                              {reg.ieeeStatus === 'yes' ? 'Yes' : 'No'}
                            </Badge>
                          </TableCell>
                          <TableCell>{reg.calculatedFee} {reg.currency}</TableCell>
                          <TableCell>
                            <Badge variant={reg.paymentStatus === 'completed' ? 'default' : 'destructive'}>
                              {reg.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(reg.registrationDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            {reg.paymentProofUrl && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(reg.paymentProofUrl, '_blank')}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Status Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Completed Payments</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>{dashboardData.completedPayments}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending Payments</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>{dashboardData.totalRegistrations - dashboardData.completedPayments}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(dashboardData.categoryBreakdown).map(([category, count]) => {
                      const categoryRevenue = dashboardData.allRegistrations
                        .filter(reg => reg.category === category && reg.paymentStatus === 'completed')
                        .reduce((sum, reg) => sum + reg.calculatedFee, 0)
                      
                      return (
                        <div key={category} className="flex justify-between items-center">
                          <span className="capitalize">{category}</span>
                          <span className="font-medium">₹{categoryRevenue.toLocaleString()}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}