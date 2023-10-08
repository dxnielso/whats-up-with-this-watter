import SettingsLayout from "../../layouts/settings";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function ThemeSettingsPage() {
  return (
    <SettingsLayout title='Tema'>
      <div className="my-1 text-2xl font-semibold">
        Configuracion de tema
      </div>

      <div className="mt-6">
        <ThemeSwitch />
      </div>
    </SettingsLayout>
  )
}