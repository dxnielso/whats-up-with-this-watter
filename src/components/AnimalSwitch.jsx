import useAnimalStore from '../store/animal'

export default function AnimalSwitch() {
  const { animal, setAnimal } = useAnimalStore()

  console.log(animal)
  
  return (
    <div className='flex justify-between border border-gray-400 rounded-2xl bg-neutral-200/80'>
      <div
        className={`flex items-center justify-center w-full p-4 overflow-hidden ${animal == 'microscopico' ? 'bg-blue-300' : 'bg-transparent'} rounded-tl-2xl rounded-bl-2xl`}
        onClick={() => setAnimal('microscopico')}
      >
        <div className='flex items-center'>
          <span>
            Microscopicos
          </span>
        </div>
      </div>

      <div className='border-r border-gray-400' />

      <div
        className={`flex items-center justify-center w-full p-4 overflow-hidden ${animal == 'macroscopico' ? 'bg-blue-300' : 'bg-transparent'} rounded-tr-2xl rounded-br-2xl`}
        onClick={() => setAnimal('macroscopico')}
      >
        <div className='flex items-center'>
          <span>
            Macroscopicos
          </span>
        </div>
      </div>
    </div>
  )
}
