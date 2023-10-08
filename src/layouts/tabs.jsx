import { FaGrip, FaHouse, FaJetFighter, FaDog } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */

function TabItem({ title, icon, path }) {
  //obtener la ruta actual

  const currentPath = window.location.pathname;

  return (
    <Link
      to={path}
      className="flex items-center justify-center"
    >
      <div className="flex items-center justify-center ">
        <div className={`flex h-[64px] w-24 rounded-xl  flex-col items-center justify-center ${currentPath === path ? 'bg-blue-500 dark:bg-[#111B21] shadow-xl shadow-blue-600 dark:shadow-gray-900' : 'bg-blue-400 dark:bg-gray-800'}`}>
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
    <div className="p-5 dark:bg-[#111B21] min-h-screen">
      {children}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-blue-400 dark:bg-[#222E35]">
        <div className="grid h-full grid-cols-4">
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
            title="Macota"
            path="/pet"
            icon={<FaDog className="mb-1.5 text-white w-12" />}
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
