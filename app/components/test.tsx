"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { CircleUser, Package2, Home, MessageSquare, Target, Package, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { ModeToggle } from "../(home)/orders/components/theme-mode"

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/messages", icon: MessageSquare, label: "Messages" },
  { href: "/retargeting", icon: Target, label: "Retargeting" },
  { href: "/orders", icon: "AI", label: "AI Orders" },
  { href: "/products", icon: Package, label: "Products" },
  { href: "/history", icon: TimerIcon, label: "History" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

const AILabel = () => {
  return (
    <motion.div
      className="relative w-7 h-7 flex items-center justify-center overflow-hidden rounded-md"
      initial={{ background: "linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)" }}
      animate={{
        background: [
          "linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)",
          "linear-gradient(45deg, #f64f59, #12c2e9, #c471ed)",
          "linear-gradient(45deg, #c471ed, #f64f59, #12c2e9)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.circle
            cx="12"
            cy="12"
            r="3"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 1, 0],
          opacity: [0, 0.15, 0.15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex w-16 flex-col border-r bg-background/80 backdrop-blur-sm">
      <nav className="flex flex-1 flex-col items-center gap-4 p-4">
        <TooltipProvider>
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Package2 className="h-5 w-5" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.icon === "AI" ? (
                    <AILabel />
                  ) : (
                    <item.icon className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                      pathname === item.href ? "scale-110" : ""
                    }`} />
                  )}
                  <span className="sr-only">{item.label}</span>
                  {pathname === item.href && mounted && (
                    <motion.div
                      className="absolute inset-0 z-[-1] rounded-xl border-2 border-primary"
                      layoutId="active-nav-item"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>

      <div className="flex flex-col items-center gap-4 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-muted/50">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="right" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
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

