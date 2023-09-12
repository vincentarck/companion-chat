import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='h-full'>
			<Navbar />
			<div className='hidden md:flex flex-col w-20 inset-y-0 mt-16 fixed'>
				<Sidebar isPro={true} />
			</div>
			<main className='pl-20 md:pl-20 pt-16 h-full'>
				{children}
			</main>
		</div>
	)
}
