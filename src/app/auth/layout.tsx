import Image from 'next/image'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className='h-screen w-screen bg-linearGradient overflow-y-hidden overflow-x-hidden sm:py-20 relative'>
      <div className='w-full h-full sm:flex items-center justify-center'>
        <div className='bg-[#FFFFFF42] shadow-lg h-fit rounded-none w-[30%] sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:pb-[9.625rem] 2xl:pt-[0.625rem] px-5 sm:px-10 py-8'>
          {children}
        </div>
      </div>
    </section>
  )
}
