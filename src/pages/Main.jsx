import { FaLocationDot } from "react-icons/fa6"
import TabLayout from "../layouts/tabs"

import water from "../data/water.json"

export default function Main() {
  return (
    <TabLayout>

      <div className="mt-10">
        <div className="flex items-center justify-center">
          <FaLocationDot
            className="w-5 h-5 mr-2 text-blue-700"
          />
          <h3 className="text-3xl font-semibold text-blue-700">
            Abasolo
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-10">

        {water.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center p-3 bg-blue-100 rounded-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 mr-3 bg-contain rounded-xl"
            />
            <div className="flex items-center justify-center w-full mt-2">
              {item.name}
            </div>
          </div>
        ))}
      </div>

    </TabLayout>
  )
}