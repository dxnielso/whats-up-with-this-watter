import SettingsLayout from "../../layouts/settings";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function ThemeSettingsPage() {
  return (
    <SettingsLayout title='Cambiar Tema'>
      <div className="mt-3">
        <ThemeSwitch />
      </div>
    </SettingsLayout>
  )
}