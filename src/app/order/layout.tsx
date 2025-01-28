'use client'
import React from 'react'

import HeaderOrder from '../../components/HeaderOrder'
import { OrderProvider } from './[orderId]/orderContext'
import { useParams } from 'next/navigation'
export default function DefaultLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { orderId } = useParams()
  const orderIdString = Array.isArray(orderId) ? orderId[0] : orderId
  return (
    <>
      <OrderProvider orderId={orderIdString ?? ''}>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className='flex h-screen overflow-hidden'>
          <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#CCCCFF]'>
            {/* <!-- ===== Header Start ===== --> */}
            <HeaderOrder />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}

            <main className='bg-[#CCCCFF]'>{children}</main>

            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      </OrderProvider>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  )
}
