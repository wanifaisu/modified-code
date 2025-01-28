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

const SecurityPage = () => {
  const [C1File, setC1File] = useState('')
  const [C1Editor, setC1Editor] = useState('')
  const [content, setContent] = useState('')
  const [submit, setSubmit] = useState('')
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

  return (
    <>
      <div className='threeCard border-slate-300 p-5 shadow-4 md:px-20 md:py-10'>
        <h2
          className={`${poppins.className} font-bold text-[24px] leading-[37.2px] text-start ml-24 my-4 text-[#000000]`}
        >
          Security Page
        </h2>

        <ServiceCard
          content={content}
          setContent={setContent}
          onSubmitForm={C1Submit}
          file={C1File}
          setFile={setC1File}
          editor={C1Editor}
        />
      </div>
    </>
  )
}

export default SecurityPage
