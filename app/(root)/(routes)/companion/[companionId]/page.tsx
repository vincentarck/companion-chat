
import React from 'react'
import prismadb from '@/lib/prismadb';
import CompanionForm from '@/components/CompanionForm';

interface CompanionIdPageProp {
    params: {
        companionId: string;
    }
}
export default async function CompanionIdPage({ params }: CompanionIdPageProp) {
    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId
        }
    })

    const categories = await prismadb.category.findMany()
    return (
        <div>
            <CompanionForm />
        </div>
    )
}
