// Component imports
import React from 'react'
import { IoLogoFacebook } from 'react-icons/io5'
import Link from 'next/link'

// Other imports

interface Props {}

const LoginForm: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex flex-col sm:max-w-xl">
      <div className="flex flex-col px-12 py-8 sm:border sm:border-gray-300 sm:bg-white">
        <img
          className="self-center object-contain"
          width={180}
          src="/logo-instagram.png"
          alt="instagram logo"
        />
        <input
          className="mt-8 flex w-80 rounded-sm border border-gray-300 bg-zinc-50 px-2 py-3 text-xs"
          type={'text'}
          placeholder="Telefono, usuario o correo electronico"
        />
        <div className="mt-2 flex justify-between border border-gray-300 bg-zinc-100">
          <input
            className="w-full bg-zinc-50 px-2 py-3 text-xs"
            type={'password'}
            placeholder="Contrasena"
          />
          <a
            href="#"
            className="flex cursor-pointer items-center rounded-sm bg-zinc-50 px-2 text-sm font-semibold"
          >
            Mostrar
          </a>
        </div>
        <Link href={'/'}>
          <a className="mt-6 rounded-sm bg-blue-400 py-2 text-center text-sm text-white">
            Iniciar sesion
          </a>
        </Link>
        <div className="mt-6 flex items-center justify-between gap-8">
          <div className="w-full border border-gray-300" />
          <div className="h-3 w-6 rounded-full border-2 border-gray-500" />
          <div className="w-full border border-gray-300" />
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <IoLogoFacebook size={25} color="#1e3a8a" />
          <a
            href="#"
            className="cursor-pointer text-sm font-bold text-blue-900"
          >
            Iniciar sesion con Facebook
          </a>
        </div>
        <h2 className="mt-4 text-center text-xs font-normal text-blue-900">
          ¿Has olvidado la contrasena?
        </h2>
      </div>
      <div className="mt-6 p-4 text-center sm:border sm:border-gray-300 sm:bg-white">
        ¿No tienes una cuenta?{''}
        <a href="#" className="ml-2 cursor-pointer font-bold text-blue-400">
          Registrate
        </a>
      </div>
      <h2 className="mt-6 text-center text-sm">Descarga la aplicacion.</h2>
      <div className="mt-4 flex justify-center gap-5">
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_castilian_spanish-es.png/bec9a7397c42.png"
          alt="download apple store app"
          className="w-30 h-10"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_spanish-es.png/723534f78879.png"
          alt="download apple store app"
          className="w-30 h-10"
        />
      </div>
    </div>
  )
}

export default LoginForm
