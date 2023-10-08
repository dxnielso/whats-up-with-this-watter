import AnimalCard from '../components/AnimalCard'
import AnimalSwitch from '../components/AnimalSwitch'
import macroscopicos from '../data/macroscopicos.json'
import microscopicos from '../data/microscopicos.json'
import TabLayout from '../layouts/tabs'

import useAnimalStore from '../store/animal'

function AnimalesMicroscopicos() {
  return (
    <div>
      {microscopicos.map((animal) => (
        <AnimalCard
          animal={animal}
          key={animal.id}
        />
      ))}
    </div>
  )
}

function AnimalesMacroscopicos() {
  return (
    <div>
      {macroscopicos.map((animal) => (
        <AnimalCard
          animal={animal}
          key={animal.id}
        />
      ))}
    </div>
  )
}

export default function TipsPage() {
  const { animal } = useAnimalStore()

  return (
    <TabLayout>
      <div className='p-5'>
        <div className='my-5 mt-2 text-2xl font-semibold'>
          ¿Que hay en el agua?
        </div>

        <p>
          Que puedes encontrar en el agua en la que te bañas, divirtes, y utilizas?.
        </p>

        <p className='pt-2'>
          Sabes que especies en peligro de extincion puedes ayudar con unos cuantos pasos?.
        </p>

        <p className='pt-2'>
          Aqui estan las especies a las que tu puedes ayudar.
        </p>

        <div className='pt-8'>
          <AnimalSwitch />
        </div>

        <div className='pt-4'>
          {animal === 'microscopico' && (
            <AnimalesMicroscopicos />
          )}

          {animal === 'macroscopico' && (
            <AnimalesMacroscopicos />
          )}
        </div>
      </div>



    </TabLayout>
  )
}
