"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Download, CheckCircle, AlertCircle, Zap, HelpCircle, Plus, DollarSign } from 'lucide-react'

export default function PrepaidBillingPage() {
  const [balance, setBalance] = useState(150)
  const [usagePercentage, setUsagePercentage] = useState(60)
  const [activeCards, setActiveCards] = useState([
    { last4: "4242", brand: "Visa", expMonth: 12, expYear: 2024, isDefault: true },
    { last4: "1234", brand: "Mastercard", expMonth: 6, expYear: 2025, isDefault: false },
  ])

  const [transactions, setTransactions] = useState([
    { date: "2023-05-01", amount: "$50.00", type: "Top-up" },
    { date: "2023-04-15", amount: "$30.00", type: "Usage" },
    { date: "2023-04-01", amount: "$100.00", type: "Top-up" },
  ])

  return (
    <div className="container mx-auto py-10 px-4 relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="absolute top-4 right-4">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-2">
            <h3 className="font-medium">Prepaid Billing Tips</h3>
            <p className="text-sm text-muted-foreground">
              • Keep your balance topped up to avoid service interruptions.
            </p>
            <p className="text-sm text-muted-foreground">
              • Monitor your usage to plan your top-ups effectively.
            </p>
            <p className="text-sm text-muted-foreground">
              • You can set up auto top-up to maintain a minimum balance.
            </p>
          </div>
        </PopoverContent>
      </Popover>

      <h1 className="text-4xl font-bold mb-8">Prepaid Account & Billing</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl">Account Balance</CardTitle>
            <CardDescription className="text-green-100">Your current prepaid balance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
                <p className="text-green-100 mt-2">Estimated to last: 7 days</p>
              </div>
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="bg-white text-green-600 hover:bg-green-100">Top Up</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Top Up Your Account</DialogTitle>
                      <DialogDescription>
                        Add funds to your prepaid account balance.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="top-up-amount">Amount</Label>
                        <Input id="top-up-amount" placeholder="Enter amount" type="number" min="1" step="0.01" />
                      </div>
                    </div>
                    <Button type="submit">Confirm Top Up</Button>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="bg-green-600 text-white border-white hover:bg-green-700">Set Auto Top-up</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Usage</span>
                <span>{usagePercentage}%</span>
              </div>
              <Progress value={usagePercentage} className="w-full" />
            </div>
            <Button className="w-full justify-start" variant="outline">
              <AlertCircle className="mr-2 h-4 w-4" /> View Detailed Usage
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Methods</CardTitle>
            <CardDescription>Manage your default and backup payment methods for top-ups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeCards.map((card, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-6 w-6" />
                    <div>
                      <p className="font-medium">{card.brand} •••• {card.last4}</p>
                      <p className="text-sm text-muted-foreground">Expires {card.expMonth}/{card.expYear}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {card.isDefault ? (
                      <span className="text-sm font-medium text-green-600">Default</span>
                    ) : (
                      <span className="text-sm font-medium text-gray-500">Backup</span>
                    )}
                    <Button variant="ghost">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add New Payment Method
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Payment Method</DialogTitle>
                  <DialogDescription>
                    Enter your card details to add a new payment method for top-ups.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-card-number">Card Number</Label>
                    <Input id="new-card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-expiry-date">Expiry Date</Label>
                      <Input id="new-expiry-date" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-cvc">CVC</Label>
                      <Input id="new-cvc" placeholder="123" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-zip">ZIP Code</Label>
                      <Input id="new-zip" placeholder="12345" />
                    </div>
                  </div>
                </div>
                <Button type="submit">Add Payment Method</Button>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Account Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="low-balance-alert">Low Balance Alert</Label>
              <Input id="low-balance-alert" placeholder="Set amount" type="number" min="1" step="0.01" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auto-topup-amount">Auto Top-up Amount</Label>
              <Input id="auto-topup-amount" placeholder="Set amount" type="number" min="1" step="0.01" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-currency">Billing Currency</Label>
              <Select>
                <SelectTrigger id="billing-currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Settings</Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle className="text-2xl">Transaction History</CardTitle>
            <CardDescription>View your recent top-ups and usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-right py-3 px-4">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3 px-4">{transaction.date}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          transaction.type === 'Top-up' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {transaction.type === 'Top-up' ? <Plus className="mr-1 h-3 w-3" /> : <Zap className="mr-1 h-3 w-3" />}
                          {transaction.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium">{transaction.amount}</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">View All Transactions</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Transaction History</DialogTitle>
                  <DialogDescription>
                    A complete list of your top-ups and usage
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Type</th>
                        <th className="text-left py-3 px-4">Description</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-right py-3 px-4">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-3 px-4">{transaction.date}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              transaction.type === 'Top-up' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {transaction.type === 'Top-up' ? <Plus className="mr-1 h-3 w-3" /> : <Zap className="mr-1 h-3 w-3" />}
                              {transaction.type}
                            </span>
                          </td>
                          <td className="py-3 px-4">{transaction.type === 'Top-up' ? 'Account Top-up' : 'Service Usage'}</td>
                          <td className="py-3 px-4 font-medium">{transaction.amount}</td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

