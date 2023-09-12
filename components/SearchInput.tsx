"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function SearchInput() {

    const router = useRouter();
    const searchParams = useSearchParams()

    const categoryId = searchParams.get('categoryId');
    const name = searchParams.get("name")

    
    const [value, setValue] = useState(name || "")

  return (
    <div className='relative'>
        <Search className='absolute h-4 w-4 top-[calc((40px-16px)/2)] left-4'/>
        <Input placeholder='Search ...' className='pl-10 b-0 bg-secondary/10'/>
    </div>
  )
}
