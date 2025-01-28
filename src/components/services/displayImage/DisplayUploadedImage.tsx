'use client'
import React from 'react'
import Image from 'next/image'
import {Poppins} from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
})

interface DisplayUploadedImageProps {
  title: string
  src: string
  onDelete: () => void
}

const DisplayUploadedImage: React.FC<DisplayUploadedImageProps> = ({
  title,
  src,
  onDelete
}) => {
  return (
    <div className='relative rounded-md'>
      {/* Render the uploaded image */}
      <span className={`${poppins.className} font-normal text-[12px] leading-[7.5px] text-[#000000]`}>{title}</span>
      <Image
        src={src}
        width={146.4}
        height={92.86}
        className='rounded-md'
        alt='Uploaded'
      />

      {/* Delete button */}
      <button onClick={onDelete}>
        <Image
          className='absolute top-8 right-2'
          src={'/icons/close.png'}
          width={20}
          height={20}
          alt='Delete'
        />
      </button>
    </div>
  )
}

export default DisplayUploadedImage
