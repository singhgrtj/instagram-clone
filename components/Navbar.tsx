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
    <nav className="border-b-2 border-gray-100 bg-white p-4">
      <div className="mx-auto flex items-center justify-between lg:max-w-5xl">
        <img
          className="w-28 object-contain"
          src="/logo-instagram.png"
          alt="instagram logo"
        />
        <div className="flex items-center space-x-4">
          <div className="hidden items-center gap-2 rounded-md border-2 bg-gray-100 px-2 sm:flex">
            <IoSearchOutline size={20} color="#9ca3af" />
            <input
              type={'text'}
              placeholder="Buscar"
              className="bg-gray-100 py-1"
            />
          </div>
          <IoHomeOutline size={25} />
          <IoPaperPlaneOutline size={25} />
          <IoAddCircleOutline size={25} />
          <IoCompassOutline size={25} />
          <IoHeartOutline size={25} />
          <img className="h-8 w-8 rounded-full object-cover" src="/elon.png" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
