import { FaLocationDot } from 'react-icons/fa6'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import MainTile from '../components/MainTile'
import TabLayout from '../layouts/tabs'

import water from '../data/water.json'

export default function Main () {
  return (
    <TabLayout>
      <div className='mt-6'>
        <Link to='/search'>
          <div className='flex items-center justify-center'>
            <FaLocationDot
              className='w-5 h-5 mr-2 text-blue-700 dark:text-white'
            />
            <h3 className='text-3xl font-semibold text-blue-700 dark:text-white'>
              Abasolo
            </h3>
            <AiOutlinePlus className='text-white' />
          </div>
        </Link>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-10'>

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
