// Component imports
import React from 'react'
import {
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoArchiveOutline,
} from 'react-icons/io5'
import { BsEmojiSmile } from 'react-icons/bs'

// Other imports

interface Props {}

const Post: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="mt-6 border border-gray-300 bg-white">
      <div className="flex items-center space-x-4 p-4">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1613429547334-553cddaa781f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <h2 className="text-sm font-semibold">johndoe</h2>
      </div>
      <img
        className="h-[700px] w-full object-cover"
        src="https://images.unsplash.com/photo-1613429547334-553cddaa781f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-4">
          <IoHeartOutline size={25} className="cursor-pointer" />
          <IoChatbubbleOutline size={25} className="cursor-pointer" />
          <IoPaperPlaneOutline size={25} className="cursor-pointer" />
        </div>
        <div>
          <IoArchiveOutline size={25} className="cursor-pointer" />
        </div>
      </div>
      <h2 className="px-4 text-sm font-semibold">1.332 Me gusta</h2>
      <p className="px-4 py-2 text-sm font-normal">
        <span className="font-semibold">Johndoe </span> Priorities. There’s
        absolutely nothing wrong with sharing your lifts on social media but
        when you focus too much on going heavy for the sake of posting a big
        lift so others will clap for you - it can distract you from the process
        of training & limit your long term potential. Don’t let ego get in your
        way of sustainable progress.
      </p>
      <a
        href="#"
        className="cursor-pointer px-4 text-sm font-normal text-gray-400"
      >
        Ver los 30 comentarios
      </a>
      <h2 className="text-normal py-2 px-4 text-[10px] uppercase text-gray-500">
        HACE UN DÍA
      </h2>
      <div className="flex items-center gap-4 border-t border-gray-300 px-4">
        <BsEmojiSmile size={25} className="cursor-pointer" />
        <input
          type={'text'}
          placeholder="Agrega un comentario..."
          className="w-full py-3 "
        />
        <a href="#" className="text-sm font-semibold text-blue-500">
          Publicar
        </a>
      </div>
    </div>
  )
}

export default Post
