"use client"
import Link from "next/link"
import { CircleUser, Menu, SchoolIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "../(home)/orders/components/theme-mode"
import { usePathname, useRouter } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,

  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
  } from "@/components/ui/tooltip"
export default function Header(){
const pathname=usePathname()
console.log(pathname);

    return(
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex ">

      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5"  >
      < TooltipProvider>
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/parent"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
          
            <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="/orders" className={`${pathname === '/orders' ? 'text-black-500 dark:text-white' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Orders</span>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
                
          
          
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="/products" className={`${pathname === '/products' ? 'text-black-500 dark:text-white' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>
                    <Package className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                    </Link>
                </TooltipTrigger>
                    <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            
            
          
            <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="/history" className={`${pathname === '/shistory' ? 'text-black-500 dark:text-white' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>
                    <TimerIcon className="w-5 h-5" />
                        <span className="sr-only">History</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">History</TooltipContent>
            </Tooltip>
              

              

            <Tooltip>
                    <TooltipTrigger asChild>
                    <Link href="/settings" className={`${pathname === '/settings' ? 'text-black-500 dark:text-white' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>


         



  </TooltipProvider>
  </nav>
  <div className="flex flex-col items-center gap-4 px-2 sm:py-50">
      <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side='right'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <ModeToggle  />
    </div>
    
  
  </aside>
    
    
    )
}
function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}