"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

const loans = [
  { href: "/loans/personal", label: "Personal Loan" },
  { href: "/loans/home", label: "Home Loan" },
  { href: "/loans/education", label: "Education Loan" },
  { href: "/loans/car", label: "Car Loan" },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f0eef9] border-b border-purple-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          CredJoy
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="font-medium">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Loans</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-56 p-2 space-y-1">
                  {loans.map((loan) => (
                    <li key={loan.href}>
                      <Link href={loan.href} passHref>
                        <NavigationMenuLink className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                          {loan.label}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/claims" passHref>
                <NavigationMenuLink className="font-medium">
                  Claims
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink className="font-medium">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block">
            <Button>Login</Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium">Home</Link>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Loans</p>
                  {loans.map((loan) => (
                    <Link
                      key={loan.href}
                      href={loan.href}
                      className="block text-sm text-muted-foreground"
                    >
                      {loan.label}
                    </Link>
                  ))}
                </div>
                <Link href="/claims" className="text-sm font-medium">Claims</Link>
                <Link href="/about" className="text-sm font-medium">About</Link>
                <Link href="/login">
                  <Button className="w-full mt-4">Login</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar;