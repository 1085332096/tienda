import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BsCurrencyDollar } from 'react-icons/bs'
import { VscPrimitiveSquare } from 'react-icons/vsc'
// eslint-disable-next-line no-unused-vars
import { Stacked, Pie, Button, SparkLine } from '../components'
// eslint-disable-next-line no-unused-vars
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
// eslint-disable-next-line no-unused-vars
import { useStateContext } from '../contexts/ContextProvider'

function Ecommerce () {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white data:text-gray-200 dark:bg-secondary-dark-bg h-44
            rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover
            bg-center'
        >
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold'>Earning Datas</p>
              <p className='text-2xl'>$58.989.786</p>
              <earningData />
            </div>
          </div>
          <div>
            <Button
              color='white'
              bgColor='gray'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-centergap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56
              p-4 pt-9 rounded-2xl hover:drop-shadow-xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.color} ml-2`}>
                  {item.percentage}
                </span>
                <span className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* nueva seccion  */}
      <div className='flex gap-10 flex-grap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4
        rounded-2xl md:w-788'
        >
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>
              Ingresos
            </p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <VscPrimitiveSquare />
                </span>
                <span>Gastos</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <VscPrimitiveSquare />
                </span>
                <span>Presupuestos</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $76.897.543
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full
                  text-white bg-green-600 ml-3 text-xs'
                  >
                    30%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Presupuesto</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>
                    $18.998.456
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Gastos</p>
              </div>
              <div>
                <SparkLine
                  currentColor='gray'
                  id='line-sparckLine'
                  type='Line'
                  height='80px'
                  widht='250px'
                  data={SparklineAreaData}
                  color='red'
                />
              </div>
              <div>
                <Button
                  color='white'
                  bgColor='bg-green-600'
                  text='Download report'
                  borderRadius='10px'

                />
              </div>
              <div>
                <Stacked
                  widht='320px'
                  height='360px'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
