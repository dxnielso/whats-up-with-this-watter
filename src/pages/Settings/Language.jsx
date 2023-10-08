import LanguageSwitch from "../../components/LanguageSwitch";
import SettingsLayout from "../../layouts/settings";

export default function LanguageSettingsPage() {
  return (
    <SettingsLayout title='Idioma'>
      <div className="my-1 text-2xl font-semibold">
        Configuracion de idioma
      </div>

      <div className="mt-6">
        <LanguageSwitch/>
      </div>
    </SettingsLayout>
  )
}