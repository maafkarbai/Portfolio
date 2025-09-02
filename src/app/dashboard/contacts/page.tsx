import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contacts() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
            Contacts
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your business contacts and relationships
          </p>
        </div>
        <Button className="bg-[#4689ec] hover:bg-[#3a7bd5] text-white">Add Contact</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No contacts found</p>
            <Button variant="outline" className="border-[#4689ec] text-[#4689ec] hover:bg-[#4689ec] hover:text-white">Add your first contact</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}