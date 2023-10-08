import { FaLocationDot } from 'react-icons/fa6'
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import MainTile from '../components/MainTile'
import TabLayout from '../layouts/tabs'

import water from '../data/water.json'

export default function Main () {
  return (
    <TabLayout>
      <div className='relative flex justify-center'>
        <div className='w-full h-[120px]'>
          <img src="https://i0.wp.com/gto.travel/wp-content/uploads/2020/06/abasolo_gto.jpg?fit=1024%2C740&ssl=1" alt="" className='w-full h-full object-cover' />
        </div>
        <Link to='/search' className='absolute left-5 top-5'>
            <BsSearch className='text-gray-900 text-2xl dark:text-white' />
        </Link>
        <div className='px-4 py-2 bg-white rounded-tl-2xl rounded-tr-2xl absolute -bottom-6 flex justify-center items-center'>
          <FaLocationDot
              className='w-5 h-5 mr-2 text-2xl text-black'
          />
          <h3 className='font-semibold text-2xl text-black'>
            Abasolo
          </h3>
        </div>

      </div>

      <div className='grid grid-cols-2 gap-4 mt-8 p-5'>

        {water.map((item) => (
          <MainTile
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </TabLayout>
  )
}