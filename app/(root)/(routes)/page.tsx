import React from 'react'
import { UserButton } from "@clerk/nextjs";
import SearchInput from '@/components/SearchInput';

export default function RootPage() {
  return (
    <div className='h-full p-4'>
      <SearchInput />
    </div>
  )
}
