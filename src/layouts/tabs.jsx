import { FaGrip, FaHouse, FaJetFighter } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */

function TabItem({ title, icon, path }) {
  //obtener la ruta actual

  const currentPath = window.location.pathname;

  return (
    <Link
      to={path}
      className="flex items-center justify-center "
    >
      <div className="flex items-center justify-center ">
        <div className={`flex h-[64px] w-24 rounded-xl  flex-col items-center justify-center ${currentPath === path ? 'bg-blue-500 shadow-xl shadow-blue-600' : 'bg-blue-400'}`}>
          {icon}
          <h4 className={`text-sm text-white`}>
            {title}
          </h4>
        </div>
      </div>
    </Link>

  )
}

export default function TabLayout({ children }) {
  return (
    <div className="p-5">
      {children}

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-blue-400">
        <div className="grid h-full grid-cols-3">
          <TabItem
            title="Inicio"
            path="/"
            icon={<FaHouse className="mb-1.5 text-white w-12" />}
          />
          <TabItem
            title="Tips"
            path="/tips"
            icon={<FaJetFighter className="mb-1.5 text-white w-12" />}
          />
          <TabItem
            title="Ajustes"
            path="/settings"
            icon={<FaGrip className="mb-1.5 text-white w-12" />}
          />
        </div>
      </div>
    </div>
  )
}
