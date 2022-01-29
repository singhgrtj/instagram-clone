// Component imports
import React from 'react'
import {
  IoHomeOutline,
  IoAddCircleOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoSearchOutline,
} from 'react-icons/io5'

// Other imports

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  const {} = props

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-300 bg-white p-4">
      <div className="mx-auto flex items-center justify-between lg:max-w-5xl">
        <img
          className="object-contain"
          width={100}
          src="/logo-instagram.png"
          alt="instagram logo"
        />
        <div className="flex items-center space-x-4">
          <div className="hidden items-center gap-2 rounded-md bg-gray-100 px-2 sm:flex">
            <IoSearchOutline size={20} color="#9ca3af" />
            <input
              type={'text'}
              placeholder="Buscar"
              className="bg-gray-100 py-1"
            />
          </div>
          <IoHomeOutline size={25} className="cursor-pointer" />
          <IoPaperPlaneOutline size={25} className="cursor-pointer" />
          <IoAddCircleOutline size={25} className="cursor-pointer" />
          <IoCompassOutline size={25} className="cursor-pointer" />
          <IoHeartOutline size={25} className="cursor-pointer" />
          <img className="h-6 w-6 rounded-full object-cover" src="/elon.png" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
