import { useEffect, useState } from 'react'
import pet from '../assets/pet/pet.png'
import funFacts from '../data/funFacts.json'

export default function Pet() {
  const [index, setIndex] = useState(0)

  const changeMessage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % funFacts.length)
  }

  useEffect(() => {
    const interval = setInterval(changeMessage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='fixed h-48 p-4 overflow-hidden bg-purple-200 rounded-xl bottom-28 right-4 left-4'>
      <div className='absolute -right-14 -bottom-4'>
        <img src={pet} alt='pet' className='w-40 h-40' />
      </div>

      <div className='flex flex-col w-8/12 p-2.5 bg-white rounded-xl'>
        <p className='text-base font-bold'>
          {funFacts[index].title}
        </p>
        <p className='text-sm'>
          {funFacts[index].description}
        </p>
      </div>
    </div>
  )
}
