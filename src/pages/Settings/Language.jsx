import LanguageSwitch from '../../components/LanguageSwitch'
import SettingsLayout from '../../layouts/settings'

export default function LanguageSettingsPage() {
  return (
    <SettingsLayout title='Cambiar Idioma'>
      <div className=''>
        <LanguageSwitch />
      </div>
    </SettingsLayout>
  )
}
