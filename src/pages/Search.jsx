import CityCard from '../components/CityCard';
import Input from '../components/Input';
import data from '../data/data.json';

export default function SearchPage() {
  return (
    <div className='h-screen p-5 bg-blue-400'>

      <div className='my-5 text-2xl font-semibold text-white'>
        Busqueda
      </div>
      
      <Input placeholder="Ciudad" type="text" />
      <main className='flex flex-col gap-y-3'>
        {
          data.map((ciudad) => (
            <CityCard
              key={ciudad.id}
              nombre={ciudad.nombre}
              cuerpos={ciudad.cuerpos}
              temp={ciudad.temp}
            />
          ))
        }
      </main>
    </div>
  )
}