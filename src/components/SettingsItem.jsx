import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function SettingsItem({ text, icon, path }) {
  return (
    <Link to={path}>
      <div className="flex items-center justify-between p-3 py-4 border border-blue-300 rounded-xl bg-slate-100">
        <div className="flex">
          <div className="flex items-center justify-center mr-3">
            {icon}
          </div>
          {text}
        </div>
        <div>
          <FaChevronRight className="w-5" />
        </div>
      </div>
    </Link>

  )
}