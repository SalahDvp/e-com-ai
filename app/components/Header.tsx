"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { CircleUser, Package2, Home, MessageSquare, Target, Package, Settings, ChevronRight, TimerIcon, CreditCard } from 'lucide-react'
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

const SparkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 2L11.5 7.5L17 10L11.5 12.5L9 18L6.5 12.5L1 10L6.5 7.5L9 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/messages", icon: MessageSquare, label: "Messages" },
  { href: "/retargeting", icon: Target, label: "Retargeting" },
  { href: "/orders", icon: "AI", label: "AI Orders" },
  { href: "/products", icon: Package, label: "Products" },
  { href: "/history", icon: TimerIcon, label: "History" },
  { href: "/billing", icon: CreditCard, label: "Billing" },
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
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      >
        AI
      </motion.span>
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
      <motion.div
        className="absolute top-0 right-0 w-3 h-3"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: [0, 1, 0], rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <SparkIcon className="w-full h-full text-yellow-300" />
      </motion.div>
    </motion.div>
  )
}

const NavItem = ({ item, isActive, isExpanded }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={`relative flex h-10 items-center justify-start rounded-xl transition-all duration-300 ease-in-out ${
            isExpanded ? "w-full px-3" : "w-10 justify-center"
          } ${
            isActive
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          {item.icon === "AI" ? (
            <AILabel />
          ) : (
            <item.icon className={`h-5 w-5 transition-all duration-300 ease-in-out ${
              isActive ? "scale-110" : ""
            }`} />
          )}
          {isExpanded && (
            <span className="ml-3">{item.label}</span>
          )}
          <span className="sr-only">{item.label}</span>
          {isActive && (
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
      {!isExpanded && (
        <TooltipContent side="right" sideOffset={10}>
          {item.label}
        </TooltipContent>
      )}
    </Tooltip>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  return (
    <motion.aside 
      className="fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-background/80 backdrop-blur-sm"
      animate={{ width: isExpanded ? "200px" : "64px" }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-1 flex-col items-center gap-4 p-4">
        <TooltipProvider>
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Package2 className="h-5 w-5" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          <AnimatePresence>
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={pathname === item.href}
                isExpanded={isExpanded}
              />
            ))}
          </AnimatePresence>
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
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-10 w-10 rounded-full hover:bg-muted/50"
          onClick={toggleSidebar}
        >
          <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
    </motion.aside>
  )
}

