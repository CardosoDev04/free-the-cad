import DefaultFooter from '@/components/ui/footers/DefaultFooter'
import React from 'react'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className="flex flex-col w-full h-full">
        <Outlet/>
        <DefaultFooter/>
    </div>
  )
}
