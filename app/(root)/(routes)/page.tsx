import React from 'react'
import { UserButton } from "@clerk/nextjs";
import SearchInput from '@/components/SearchInput';
import prismadb from '@/lib/prismadb';
import Categories from '@/components/Categories';

export default async function RootPage() {
  const categories = await prismadb.category.findMany();

  return (
    <div className='h-full p-4'>
      <SearchInput  />
      <Categories data={categories} />
    </div>
  )
}
