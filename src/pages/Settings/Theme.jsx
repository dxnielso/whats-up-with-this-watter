import ThemeSwitch from '../../components/ThemeSwitch'
import SettingsLayout from '../../layouts/settings'

export default function ThemeSettingsPage() {
  return (
    <SettingsLayout title='Cambiar Tema'>
      <div className='mt-3'>
        <ThemeSwitch />
      </div>
    </SettingsLayout>
  )
}
