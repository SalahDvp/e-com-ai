 "use client"

 import { useState } from "react"
 import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
 import { Button } from "@/components/ui/button"
 import { Calendar } from "@/components/ui/calendar"
 import { Separator } from "@/components/ui/separator"
 import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
 import {ArchiveDataTable} from './components/archive-table'
 import { DailyAtandenceDataTable } from './components/daily-table'

 export default function Component() {
   const [selectedDate, setSelectedDate] = useState(new Date())
   
  
   return (
     <div className="bg-background text-foreground p-6 md:p-10">
     <DailyAtandenceDataTable/>
     <Separator className="my-8" />
      <ArchiveDataTable/>
     </div>
   )
 }
 
