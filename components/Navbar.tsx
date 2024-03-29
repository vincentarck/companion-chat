"use client"

import { Menu, Sparkles } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'


import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ThemeMode } from './ThemeMode'
import MobileSidebar from './MobileSidebar'

const font = Poppins({
  weight: "600",
  subsets: ["latin"]
})

export default function Navbar() {
  return (
    <div className='fixed w-full z-50 h-16 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary'>
      <div className='flex items-center'>
        <MobileSidebar />
        <Link href={"/"}>
          <h1 className={cn('hidden md:block text-xl md:text-3xl font-bold text-primary', font.className)}>companion.ai</h1>
        </Link>
      </div>
      <div className='flex items-center gap-x-3'>
        <Button size={"sm"} variant={"premium"} >
          Upgrade
          <Sparkles className='h-4 w-4 fill-white text-white ml-2' />
        </Button>
        <ThemeMode />
        <UserButton />
      </div>
    </div>
  )
}
