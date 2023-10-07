import CityCard from '../components/CityCard';

export default function SearchPage() {
  return (
    <div className='p-5'>
      <input type="text" name="" id="" placeholder="Ciudad" className='w-full px-2 py-1 border mb-4 text-base rounded-md outline-none' >

      </input>
      <main className='flex flex-col gap-y-3'>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </main>
    </div>
  )
}