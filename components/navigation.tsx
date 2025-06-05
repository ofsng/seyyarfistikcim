"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, Calendar, Megaphone, Users, Mail, Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Ana Sayfa", icon: null },
    { href: "/magaza", label: "Mağaza", icon: ShoppingBag },
    { href: "/fistik-partisi", label: "Fıstık Partisi", icon: Calendar },
    { href: "/duyurular", label: "Duyurular", icon: Megaphone },
    { href: "/sayfalarimiz", label: "Sayfalarımız", icon: Users },
    { href: "/iletisim", label: "İletişim", icon: Mail },
    { href: "/destek", label: "Destek", icon: Heart },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <Image
              src="/images/peanut-mascot.png"
              alt="Seyyar Fıstıkçım Maskot"
              width={50}
              height={50}
              className="animate-bounce group-hover:animate-pulse transition-all duration-300"
            />
            <span className="text-2xl md:text-3xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors duration-300">
              Seyyar Fıstıkçım
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 font-semibold text-lg group"
              >
                {item.icon && <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-orange-800 hover:text-orange-600 hover:bg-orange-100"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menüyü Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/peanut-mascot.png"
                    alt="Seyyar Fıstıkçım"
                    width={40}
                    height={40}
                    className="animate-bounce"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-orange-800 hover:text-orange-600"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Menüyü Kapat</span>
                  </Button>
                </div>
                <nav className="flex-1 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 font-semibold text-lg rounded-xl"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
