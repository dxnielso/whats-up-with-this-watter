import SettingsItem from "../components/SettingsItem";
import TabLayout from "../layouts/tabs";
import { FaLanguage, FaMoon } from "react-icons/fa6";

export default function SettingsPage() {
  return (
    <TabLayout>
      <div className="my-5 text-2xl font-semibold">
        Configuraciones
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <SettingsItem
          text="Idioma"
          icon={<FaLanguage className="w-5"/>}
        />

        <SettingsItem
          text="Tema"
          icon={<FaMoon className="w-5"/>}
        />
      </div>

    </TabLayout>
  )
}