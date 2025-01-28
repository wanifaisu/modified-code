import React, { useRef, useState } from 'react'
import PrimaryButton from '@/components/button/PrimaryButton'
import { FieldValues } from 'react-hook-form'
import ServiceCard from './ServiceCard'
import axios from 'axios'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700']
})

const CardThreeUpdate = () => {
  interface ModalProps {
    isVisible: boolean
    onClose: (this: Window, ev: Event) => any
    children: React.ReactNode
    hideCloseIcon?: boolean
  }

  const [card, setCard] = useState<string>('card one')
  const [C1File, setC1File] = useState('')
  const [C2File, setC2File] = useState('')
  const [C3File, setC3File] = useState('')
  const C1Editor = useRef(null)
  const C2Editor = useRef(null)
  const C3Editor = useRef(null)
  const [content1, setContent1] = useState('')
  const [content2, setContent2] = useState('')
  const [content3, setContent3] = useState('')

  const C1Submit = (data: FieldValues) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/create/threecard`,
        data
      )
      .then((res) => {
        console.log('Response:', res.data)
        alert('Form data saved successfully!')
      })
  }
  const C2Submit = (data: FieldValues) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/create/threecard`,
        data
      )
      .then((res) => {
        console.log('Response:', res.data)
        alert('Form data saved successfully!')
      })
  }
  const C3Submit = (data: FieldValues) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/create/threecard`,
        data
      )
      .then((res) => {
        console.log('Response:', res.data)
        alert('Form data saved successfully!')
      })
  }

  return (
    <>
      <h2
        className={`${poppins.className} font-bold text-[24px] leading-[37.2px] text-start ml-8 mt-6 text-[#000000]`}
      >
        3 Cards
      </h2>
      <div className='threeCard border-slate-300 p-5 shadow-4 md:px-20 md:py-10'>
        {/* Button and Update Button */}
        <div className='mb-10 flex gap-2 justify-between'>
          <div className='flex items-center justify-end ml-35 gap-5'>
            <button
              className={`${
                card === 'card one'
                  ? 'bg-[#ffb200] text-black-4'
                  : 'bg-white text-[#00000080]'
              } rounded-lg border-[#ffb200] w-[80px] h-[45px] text-sm text-black border-[0.5px] border-[#00000080] font-semibold hover:bg-[#ffb200] whitespace-nowrap`}
              onClick={() => setCard('card one')}
            >
              Card 1
            </button>

            <button
              className={`${
                card === 'card two'
                  ? 'bg-[#ffb200] text-black-4'
                  : 'bg-white text-[#00000080]'
              } rounded-lg border-[#ffb200] w-[80px] h-[45px] text-sm text-black border-[0.5px] border-[#00000080] font-semibold hover:bg-[#ffb200] whitespace-nowrap`}
              onClick={() => setCard('card two')}
            >
              Card 2
            </button>
            <button
              className={`${
                card === 'card three'
                  ? 'bg-[#ffb200] text-black-4'
                  : 'bg-white text-[#00000080]'
              } rounded-lg border-[#ffb200] w-[80px] h-[45px] text-sm text-black border-[0.5px] border-[#00000080] font-semibold hover:bg-[#ffb200] whitespace-nowrap`}
              onClick={() => setCard('card three')}
            >
              Card 3
            </button>
          </div>
        </div>
        {card === 'card one' && (
          <ServiceCard
            content={content1}
            setContent={setContent1}
            onSubmitForm={C1Submit}
            file={C1File}
            setFile={setC1File}
            editor={C1Editor}
          />
        )}
        {card === 'card two' && (
          <ServiceCard
            content={content2}
            setContent={setContent2}
            onSubmitForm={C2Submit}
            file={C2File}
            setFile={setC2File}
            editor={C2Editor}
          />
        )}
        {card === 'card three' && (
          <ServiceCard
            content={content3}
            setContent={setContent3}
            onSubmitForm={C3Submit}
            file={C3File}
            setFile={setC3File}
            editor={C3Editor}
          />
        )}
      </div>
    </>
  )
}

export default CardThreeUpdate
