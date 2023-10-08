import { useParams } from "react-router-dom"
import water from "../data/water.json"

export default function DetailPage() {
  const { id } = useParams()
  const data = water.find(item => item.id === Number(id));

  return (
    <div>
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-48 mr-3 bg-contain rounded-b-xl"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold text-blue-900">
          {data.name}
        </h3>
        <p className="mt-3 text-sm text-gray-500">
          {data.description}
        </p>
      </div>
      
    </div>
  )
}