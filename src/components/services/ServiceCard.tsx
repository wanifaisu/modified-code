import React, { useRef, useState } from 'react'
import { BsCloudUpload, BsTrash3 } from 'react-icons/bs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '400']
})
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

interface FormData {
  file: File | null
  name: string
  title: string
  tag: string
  description: string
}

const ServiceCard = ({
  content,
  setContent,
  onSubmitForm,
  file,
  setFile,
  editor
}: {
  content: string
  setContent: (content: string) => void
  onSubmitForm: (data: any) => void
  file: File | string
  setFile: (file: any) => void
  editor: any
}) => {
  const inputRef = useRef<any>()
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState<FormData>({
    file: null,
    name: '',
    title: '',
    tag: '',
    description: ''
  })
  const editorRef = useRef(null)

  const handleFileInputClick = () => hiddenFileInput.current?.click()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0]
      if (!uploadedFile.type.startsWith('image/')) {
        // alert("Please upload a valid image file.");
        return
      }
      setFormData((prev) => ({ ...prev, file: uploadedFile }))
    }
  }

  const handleDeleteFile = () => {
    setFormData((prev) => ({ ...prev, file: null }))
  }

  const handleSave = () => {
    console.log('Form Data Submitted:', formData)
    // alert("Form data saved successfully!");
    // Add your API integration here for saving the data
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-row w-full justify-evenly'>
        <div className='flex flex-col -ml-14'>
          <div className='w-full flex flex-row gap-12 pl-[1rem]'>
            <div className='flex flex-col'>
              <label className='font-inter font-medium mb-6 text-[#000000] text-[16px] leading-[19.36px]'>
                Name
              </label>
              <input
                type='text'
                className='w-[302px] h-[36px] rounded-[5px] border-[#000000] border-[1px]'
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-inter font-medium mb-6 text-[#000000] text-[16px] leading-[19.36px]'>
                Title
              </label>
              <input
                type='text'
                className='w-[302px] h-[36px] rounded-[5px] border-[#000000] border-[1px]'
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='mb-6 flex justify-start items-center'>
            <button
              className='bg-[#ffb200] text-black px-4 py-2 rounded'
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full ml-26 mt-5'>
        <div className='flex flex-col'>
          <div className='w-full flex flex-row'>
            <div className='flex flex-col'>
              <label className='font-inter font-medium mb-6 text-[#000000] text-[16px] leading-[19.36px]'>
                Description
              </label>
              <textarea
                type='text'
                className='w-[660px] h-[193px] rounded-[10px] border-[#000000] border-[1px]'
                value={formData.description}
                onChange={(e: { target: { value: any } }) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full ml-26 mt-5'>
        <div className='flex flex-col'>
          <div className='w-full flex flex-row'>
            <div className='flex flex-col'>
              <label className='font-inter font-medium mb-6 text-[#000000] text-[16px] leading-[19.36px]'>
                Upload
              </label>
              <div
                onClick={() => {
                  inputRef.current.click()
                }}
                onDrop={(e) => {
                  e.preventDefault()
                  // setFileEnter(false)
                  if (e.dataTransfer.items) {
                    ;[...e.dataTransfer.items].forEach((item, i) => {
                      if (item.kind === 'file') {
                        const file = item.getAsFile()
                        if (file) {
                          setFormData((prev) => ({ ...prev, file: file }))
                        }
                        console.log(`items file[${i}].name = ${file?.name}`)
                      }
                    })
                  }
                }}
                className='w-[660px] h-[193px] flex flex-col justify-center items-center rounded-[10px] border-[#000000] border-[1px] bg-white cursor-pointer'
              >
                <Image
                  src={'/icons/upload-image.png'}
                  width={40}
                  height={40}
                  alt={'Upload Image'}
                  className='object-contain'
                />
                <span
                  className={`${poppins.className} font-medium text-[16px] leading-[24.8px] text-center text-[#000000]`}
                >
                  Browse File
                </span>
                <span
                  className={`${poppins.className} font-normal text-[16px] leading-[18.6px] text-center text-[#000000CC]`}
                >
                  {formData.file?.name || 'Drag and upload icon here'}
                </span>
              </div>
              <input
                ref={inputRef}
                type='file'
                className='hidden '
                onChange={(e: { target: { files: any } }) =>
                  setFormData((prev) => ({ ...prev, file: e.target.files[0] }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
