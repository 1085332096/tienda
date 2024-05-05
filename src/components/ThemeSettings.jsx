import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'

import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

function ThemeSettings () {
  const { setThemeSettings, setMode, setColor, currentColor, currentMode } =
    useStateContext()
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-600 bg-white dark:[#484B52] W-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Configuraciones</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Opciones de tareas</p>
          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='light'
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-2'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <div className='p-4 borde-t-1 border-color ml-4'>
          <p className='font-semibold text-xl'>Color Temas</p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position='TopCenter'
              >
                <div
                  className='relative mt-2 cursor-pointer flex gap-5 items-center'
                  key={item.name}
                >
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        // eslint-disable-next-line no-constant-condition
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
