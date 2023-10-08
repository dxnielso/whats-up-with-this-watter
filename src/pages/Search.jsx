import CityCard from '../components/CityCard';
// import { FaSearch } from "react-icons/fa";
import Input from '../components/Input';
import data from '../data/data.json';

export default function SearchPage() {
  return (
    <div className='p-8 bg-sky-300 h-screen'>
      <Input placeholder="Buscar ciudad" type="text" />
      <main className='flex flex-col gap-y-3'>
        {
          data.map((ciudad) => (
            <CityCard key={ciudad.key} nombre={ciudad.nombre} cuerpos={ciudad.cuerpos} temp={ciudad.temp} />
          ))
        }
      </main>
    </div>
  )
}