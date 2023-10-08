import { Link } from "react-router-dom"

export default function MainTile({ item }) {
  return (
    <Link
      key={item.id}
      to={`/detail/${item.id}`}
    >
      <div
        className="flex flex-col justify-center p-3 bg-blue-100 rounded-xl"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 mr-3 bg-contain rounded-xl"
        />
        <div className="flex items-center justify-center w-full mt-2 text-sm">
          {item.name}
        </div>
      </div>
    </Link>
  )
}