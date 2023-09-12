"use client"

import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import qs from "query-string"
export default function SearchInput() {

    const router = useRouter();
    const searchParams = useSearchParams()

    const categoryId = searchParams.get('categoryId');
    const name = searchParams.get("name")


    const [value, setValue] = useState(name || "")
    const debouncedInput = useDebounce<string>(value);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const query = {
            name: debouncedInput,
            categoryId
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        })

        router.push(url)

    }, [debouncedInput, router, categoryId])

    return (
        <div className='relative'>
            <Search className='absolute h-4 w-4 top-[calc((40px-16px)/2)] left-4' />
            <Input onChange={onChange} placeholder='Search ...' className='pl-10 b-0 bg-secondary/10' />
        </div>
    )
}
