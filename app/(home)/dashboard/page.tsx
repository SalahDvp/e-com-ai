"use client"

import { ArrowDown, ArrowUp, ChevronDown, ClipboardCopy, MessageSquare, Users, Webhook } from 'lucide-react'
import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline">Export Data</Button>
            <Button>New Campaign</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
                  <h2 className="text-3xl font-bold">12,543</h2>
                </div>
                <div className="p-3 bg-primary/10 rounded-full transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:bg-primary/20">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={progress} className="h-2" />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  12.3% from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Webhooks</p>
                  <h2 className="text-3xl font-bold">8</h2>
                </div>
                <div className="p-3 bg-primary/10 rounded-full transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:bg-primary/20">
                  <Webhook className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={100} className="h-2" />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  2 new this week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Return Rate</p>
                  <h2 className="text-3xl font-bold">4.2%</h2>
                </div>
                <div className="p-3 bg-primary/10 rounded-full transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:bg-primary/20">
                  <ArrowDown className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={42} className="h-2" />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <span className="text-red-600 flex items-center">
                  <ArrowDown className="w-4 h-4 mr-1" />
                  2.1% from last week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reached Customers</p>
                  <h2 className="text-3xl font-bold">8,432</h2>
                </div>
                <div className="p-3 bg-primary/10 rounded-full transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:bg-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={84} className="h-2" />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  842 new customers
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Message Analytics</CardTitle>
                <Select defaultValue="7days">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                Chart visualization will be implemented here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium">Your Webhook URL</label>
                <div className="flex mt-2">
                  <Input
                    readOnly
                    value="https://api.notifyhub.com/webhook/abc123"
                    className="flex-1 rounded-r-none"
                  />
                  <Button variant="outline" className="rounded-l-none" onClick={() => {}}>
                    <ClipboardCopy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="#">
                    <div className="flex flex-col items-start">
                      <div className="font-medium">Message Templates</div>
                      <div className="text-sm text-muted-foreground">Customize your notification messages</div>
                    </div>
                    <ChevronDown className="w-4 h-4 ml-2 text-muted-foreground" />
                  </Link>
                </Button>

                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="#">
                    <div className="flex flex-col items-start">
                      <div className="font-medium">Delivery Providers</div>
                      <div className="text-sm text-muted-foreground">Configure shipping services</div>
                    </div>
                    <ChevronDown className="w-4 h-4 ml-2 text-muted-foreground" />
                  </Link>
                </Button>

                <Button variant="outline" className="w-full justify-between" asChild>
                  <Link href="#">
                    <div className="flex flex-col items-start">
                      <div className="font-medium">Notification Rules</div>
                      <div className="text-sm text-muted-foreground">Set up automated triggers</div>
                    </div>
                    <ChevronDown className="w-4 h-4 ml-2 text-muted-foreground" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Messages</CardTitle>
              <Button variant="link" asChild>
                <Link href="#">View all</Link>
              </Button>
            </div>
            <CardDescription>Track your latest message delivery status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CUSTOMER</TableHead>
                  <TableHead>TRACKING NUMBER</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>TIME</TableHead>
                  <TableHead>MESSAGE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>TRK123456789</TableCell>
                  <TableCell>
                    <Badge variant="success">Delivered</Badge>
                  </TableCell>
                  <TableCell>{new Date().toLocaleString()}</TableCell>
                  <TableCell className="max-w-xs truncate">Your package will be delivered today between 2-4 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith</TableCell>
                  <TableCell>TRK987654321</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Failed</Badge>
                  </TableCell>
                  <TableCell>{new Date(Date.now() - 15 * 60000).toLocaleString()}</TableCell>
                  <TableCell className="max-w-xs truncate">Package delivery attempted. Please confirm your av...</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mike Johnson</TableCell>
                  <TableCell>TRK456789123</TableCell>
                  <TableCell>
                    <Badge variant="success">Delivered</Badge>
                  </TableCell>
                  <TableCell>{new Date(Date.now() - 30 * 60000).toLocaleString()}</TableCell>
                  <TableCell className="max-w-xs truncate">Your package has been picked up by our courier</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}