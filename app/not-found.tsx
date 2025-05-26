import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-orange-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Page Not Found
          </CardTitle>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full" size="lg">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            
            <Link href="/registration">
              <Button variant="outline" className="w-full" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Conference Registration
              </Button>
            </Link>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a 
                href="mailto:saneev.das@cutm.ac.in" 
                className="text-orange-600 hover:underline"
              >
                saneev.das@cutm.ac.in
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}