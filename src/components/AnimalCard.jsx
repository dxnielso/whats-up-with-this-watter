import { Link } from "react-router-dom"
import useAnimalStore from '../store/animal'

export default function AnimalCard({ animal }) {
  const { animal: animalType } = useAnimalStore()
  
  return (
    <Link to={`/animal/${animal.id}?type=${animalType}`}>
      <div className="flex w-full gap-3 my-3 border border-gray-300 rounded-xl">
        <div>
          <img
            src={animal.imagen}
            alt={animal.name}
            className="w-24 h-24 rounded-xl"
          />
        </div>
        <div className="flex-col items-center justify-center p-3">
          <p className="font-bold">{animal.nombre}</p>
          <p className="mt-1">{animal.especie}</p>
        </div>
      </div>
    </Link>

  )
}