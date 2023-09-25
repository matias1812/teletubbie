
import { Input } from '@nextui-org/react'
import { MapView } from '../components'


export const Screen = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:justify-center md:gap-10 pt ">
        <div className="md:w-1/3 sm:w-1/2 min-[300px]:w-[15rem] min-[300px]:self-center  sm:self-center mb-8 md:mb-0 ">
          <div className="bg-gray-100 py-6 md:py-12 rounded-xl ">
            <div className="px-4 md:px-6 font-mono ">
              <h2 className="text-lg md:text-xl text-center font-bold mb-2 md:mb-4 text-primary">Contáctanos</h2>
              <form >
                <div className="mb-2 md:mb-4">
                  <Input
                    type="text"
                    label="Tu nombre"
                  />
                </div>
                <div className="mb-2 md:mb-4">
                  <Input
                    type="email"
                    label="Email"
                  />
                </div>
                <div className="mb-2 md:mb-4">
                  <label htmlFor="message" className="block text-primary font-bold mb-1 md:mb-2">Mensaje</label>
                  <textarea id="message" className="w-full px-2 py-1 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:border-primary" rows={3}></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary font-bold text-white px-4 py-1 md:px-6 md:py-2 rounded-lg hover:bg-primary-600 text-sm md:text-base"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0 sm:self-center ">
          <MapView />
        </div>
      </div>


    </>
  )
}



