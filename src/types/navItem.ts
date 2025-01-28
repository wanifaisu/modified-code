import Image from 'next/image'

export interface navItem {
  id: number
  title: string
  url: string
  icon: React.ComponentType<any> | undefined
  image: string | undefined
}
