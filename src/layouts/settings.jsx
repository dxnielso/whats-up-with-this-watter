import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SettingsLayout({ children, title }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between w-full h-20 px-5 bg-blue-400">

        <div
          className="flex items-center justify-center w-10 h-10 p-3 bg-blue-600 rounded-full"
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft className="w-5 text-white" />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="p-5">
        {children}
      </div>
    </div>

  )
}