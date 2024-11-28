import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function BillingPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Billing</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plan</CardTitle>
            <CardDescription>You are currently on the Pro plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Pro Plan</p>
                <p className="text-sm text-gray-500">$29/month</p>
              </div>
              <Button variant="outline">Change Plan</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Update your payment details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <Input id="expiry-date" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Update Payment Method</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>View your recent invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { date: "2023-05-01", amount: "$29.00" },
                { date: "2023-04-01", amount: "$29.00" },
                { date: "2023-03-01", amount: "$29.00" },
              ].map((invoice, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <span>{invoice.date}</span>
                  <span>{invoice.amount}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Invoices</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Billing Settings</CardTitle>
            <CardDescription>Manage your billing preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-renew">Auto-renew subscription</Label>
              <Switch id="auto-renew" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-email">Billing Email</Label>
              <Input id="billing-email" placeholder="billing@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-currency">Billing Currency</Label>
              <Select>
                <SelectTrigger id="billing-currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="gbp">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

