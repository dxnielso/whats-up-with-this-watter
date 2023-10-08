import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SettingsLayout({ children, title }) {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <div className="flex items-center justify-between w-full h-20 px-5 bg-blue-400 dark:bg-[#222E35]">

        <div
          className="flex items-center justify-center w-10 h-10 p-3 bg-blue-600 dark:bg-[#111B21] rounded-full"
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft className="w-5 text-white" />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="p-5 dark:bg-[#111B21] h-full w-full">
        {children}
      </div>
    </div>

  )
}