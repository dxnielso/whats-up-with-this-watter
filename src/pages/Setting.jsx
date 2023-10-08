import { FaLanguage, FaMoon } from "react-icons/fa6";
import SettingsItem from "../components/SettingsItem";
import TabLayout from "../layouts/tabs";

export default function SettingsPage() {
  return (
    <TabLayout>
      <div className="my-5 text-2xl font-semibold">
        Configuraciones
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <SettingsItem
          text="Idioma"
          path={"/settings/language"}
          icon={<FaLanguage className="w-5" />}
        />

        <SettingsItem
          text="Tema"
          path={"/settings/theme"}
          icon={<FaMoon className="w-5" />}
        />
      </div>

    </TabLayout>
  )
}