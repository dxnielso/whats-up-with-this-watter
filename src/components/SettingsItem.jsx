import { FaChevronRight } from "react-icons/fa6"

export default function SettingsItem({ text, icon, onClick }) {
  return (
    <div className="flex items-center justify-between p-3 border border-blue-300 rounded-xl bg-slate-100">
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
  )
}