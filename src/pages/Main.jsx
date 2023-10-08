import { FaLocationDot } from 'react-icons/fa6'
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import MainTile from '../components/MainTile'
import TabLayout from '../layouts/tabs'

import water from '../data/water.json'
import api from '../data/api.json';

export default function Main () {
  return (
    <TabLayout>
      <div className='relative flex justify-center'>
        <div className='w-full h-[120px]'>
          <img src="https://www.eleconomista.com.mx/__export/1654043317061/sites/eleconomista/img/2022/05/31/leon-guanajuato-turismo-cortesia-twitter-sectur.png_1902800913.png" alt="" className='w-full h-full object-cover' />
        </div>
        <Link to='/search' className='absolute left-5 top-5'>
            <BsSearch className='text-gray-900 text-2xl dark:text-white' />
        </Link>
        <div className='px-4 py-2 bg-white rounded-tl-2xl rounded-tr-2xl absolute -bottom-6 flex justify-center items-center dark:bg-[#111B21]'>
          <FaLocationDot
              className='w-5 h-5 mr-2 text-2xl text-black dark:text-white'
          />
          <h3 className='font-semibold text-2xl text-black dark:text-white'>
            León
          </h3>
        </div>

      </div>

      <div className='grid grid-cols-2 gap-4 mt-8 p-5'>

        {api.map((cuerpo) => (
          <MainTile
            key={cuerpo.id}
            item={cuerpo}
          />
        ))}
      </div>

    </TabLayout>
  )
}