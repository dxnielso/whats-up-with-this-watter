import { useParams } from 'react-router-dom'
import water from '../data/water.json'
import api from '../data/api.json';

export default function DetailPage() {
  const { id } = useParams()
  const data = api.find(item => item.id === Number(id))

  return (
    <div className='dark:bg-[#111B21] h-screen'>
      <img
        src={data.imagen}
        alt={data.nombre}
        className='w-full h-64 mr-3 bg-contain rounded-b-3xl'
      />

      <div className='p-5'>
        <h3 className='text-2xl font-bold text-blue-900 dark:text-white'>
          {data.nombre}
        </h3>
        <p className='mt-3 text-sm text-gray-500 dark:text-white52'>
          {data.parametros.calidadDBO}
        </p>
      </div>

    </div>
  )
}
