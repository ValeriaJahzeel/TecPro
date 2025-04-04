import Image from "next/image"
import Link from "next/link"


export default function InicioSesion() {
  return (
   
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 sm:py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <Image
              alt="TecPro Logo"
              src="/logo.svg"
              width={180}
              height={60}
              className="h-auto w-auto"
            />
          </div>
          <h2 className="mt-6 sm:mt-10 text-center text-xl sm:text-2xl font-bold tracking-tight text-azul-oscuro">
            Hola, Administrador!
          </h2>
        </div>

        <div className="mt-6 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-900">
                Usuario
              </label>
              <div className="mt-1 sm:mt-2">
                <input
                  id="usuario"
                  name="usuario"
                  type="text"
                  required
                  autoComplete="usuario"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-sm sm:text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-azul-medio"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-1 sm:mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-sm sm:text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-azul-medio"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-azul-medio px-3 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-medio transition-colors duration-200"
              >
                Entrar
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-azul-medio hover:text-blue-700 transition-colors">
              Volver a página principal
            </Link>
          </div>
        </div>
      </div>
   
  )
}