"use client"

import * as React from "react"
import { CalendarIcon, ChevronDownIcon, SearchIcon } from 'lucide-react'
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const statusOptions = [
  { value: "all", label: "All" },
  { value: "delivered", label: "Delivered" },
  { value: "failed", label: "Failed" },
  { value: "pending", label: "Pending" },
]

const timeOptions = [
  { value: "1h", label: "Last hour" },
  { value: "24h", label: "Last 24 hours" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "custom", label: "Custom range" },
]

const messages = [
  { id: 1, customer: "John Doe", trackingNumber: "TRK123456789", status: "delivered", time: new Date(2024, 2, 15, 14, 30), message: "Your package will be delivered today between 2-4 PM" },
  { id: 2, customer: "Jane Smith", trackingNumber: "TRK987654321", status: "failed", time: new Date(2024, 2, 15, 13, 45), message: "Package delivery attempted. Please confirm your availability for tomorrow." },
  { id: 3, customer: "Mike Johnson", trackingNumber: "TRK456789123", status: "delivered", time: new Date(2024, 2, 15, 12, 15), message: "Your package has been picked up by our courier" },
  { id: 4, customer: "Emily Brown", trackingNumber: "TRK789123456", status: "pending", time: new Date(2024, 2, 15, 11, 30), message: "Your package is being processed at our facility" },
  { id: 5, customer: "David Wilson", trackingNumber: "TRK321654987", status: "delivered", time: new Date(2024, 2, 15, 10, 45), message: "Your package has been delivered. Thank you for using our service!" },
  // Add more messages to fill the screen
  ...[...Array(20)].map((_, index) => ({
    id: 6 + index,
    customer: `Customer ${index + 6}`,
    trackingNumber: `TRK${Math.random().toString(36).substr(2, 9)}`,
    status: ["delivered", "failed", "pending"][Math.floor(Math.random() * 3)],
    time: new Date(2024, 2, 15, 10, 0 - index * 15),
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }))
]

export default function FilteredMessagesFullscreen() {
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>(["all"])
  const [selectedTime, setSelectedTime] = React.useState(timeOptions[1].value)
  const [date, setDate] = React.useState<Date>()
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredMessages = React.useMemo(() => {
    return messages.filter((message) => {
      const statusMatch = selectedStatus.includes("all") || selectedStatus.includes(message.status)
      let timeMatch = true

      if (selectedTime === "1h") {
        timeMatch = message.time > new Date(Date.now() - 60 * 60 * 1000)
      } else if (selectedTime === "24h") {
        timeMatch = message.time > new Date(Date.now() - 24 * 60 * 60 * 1000)
      } else if (selectedTime === "7d") {
        timeMatch = message.time > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      } else if (selectedTime === "30d") {
        timeMatch = message.time > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      } else if (selectedTime === "custom" && date) {
        timeMatch = message.time >= date
      }

      const searchMatch = 
        message.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase())

      return statusMatch && timeMatch && searchMatch
    })
  }, [selectedStatus, selectedTime, date, searchTerm])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Message Center</h1>
            <p className="text-muted-foreground">View and manage all your messages in real-time</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[200px] justify-between">
                  {selectedStatus.length === 1 && selectedStatus[0] === "all"
                    ? "All Statuses"
                    : `${selectedStatus.length} selected`}
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                {statusOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.value}
                    checked={selectedStatus.includes(option.value)}
                    onCheckedChange={(checked) => {
                      if (option.value === "all") {
                        setSelectedStatus(checked ? ["all"] : [])
                      } else {
                        setSelectedStatus((prev) =>
                          checked
                            ? [...prev.filter((item) => item !== "all"), option.value]
                            : prev.filter((item) => item !== option.value)
                        )
                      }
                    }}
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[200px] justify-between">
                  {timeOptions.find((option) => option.value === selectedTime)?.label}
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                {timeOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.value}
                    checked={selectedTime === option.value}
                    onCheckedChange={() => setSelectedTime(option.value)}
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {selectedTime === "custom" && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[200px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}

            <div className="relative">
              <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="overflow-auto flex-grow border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">CUSTOMER</TableHead>
                <TableHead className="w-[200px]">TRACKING NUMBER</TableHead>
                <TableHead className="w-[100px]">STATUS</TableHead>
                <TableHead className="w-[200px]">TIME</TableHead>
                <TableHead>MESSAGE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.customer}</TableCell>
                  <TableCell>{message.trackingNumber}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        message.status === "delivered"
                          ? "success"
                          : message.status === "failed"
                          ? "destructive"
                          : "default"
                      }
                    >
                      {message.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{message.time.toLocaleString()}</TableCell>
                  <TableCell className="max-w-md truncate">{message.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}