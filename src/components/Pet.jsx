import { useEffect, useState } from 'react'
import pet2 from '../assets/pet/pet-2.png'
import pet from '../assets/pet/pet.png'
import funFacts from '../data/funFacts.json'

export default function Pet() {
  const [index, setIndex] = useState(0)
  const [currentPet, setCurrentPet] = useState(pet);

  const changeMessage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % funFacts.length)
  }

  const changePet = () => {
    setCurrentPet((prevPet) => (prevPet === pet ? pet2 : pet));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeMessage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      changePet();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed p-4 overflow-hidden bg-purple-200 dark:bg-gray-300 h-72 rounded-xl bottom-28 right-4 left-4'>
      <div className='flex items-center justify-center w-full mb-3 text-lg font-bold'>
        <p>Salamandrin</p>
      </div>

      <div className='absolute -right-14 -bottom-4'>
        <img src={currentPet} alt='pet' className='w-40 h-40' />
      </div>

      <div className='flex flex-col w-8/12 p-2.5 bg-white rounded-xl'>
        <p className='text-base font-bold'>
          {funFacts[index].title}
        </p>
        <p className='mt-2 text-sm'>
          {funFacts[index].description}
        </p>
      </div>
    </div>
  )
}
