import { FaLanguage, FaMoon } from 'react-icons/fa6'
import SettingsItem from '../components/SettingsItem'
import TabLayout from '../layouts/tabs'

export default function SettingsPage() {
  return (
    <TabLayout>
      <div className='my-5 text-2xl font-semibold p-5'>
        <h1 className='dark:text-white'>Configuraciones</h1>
      </div>

      <div className='flex flex-col gap-3 p-5'>
        <SettingsItem
          text='Idioma'
          path='/settings/language'
          icon={<FaLanguage className='w-6 h-6 text-red-700' />}
        />

        <SettingsItem
          text='Tema'
          path='/settings/theme'
          icon={<FaMoon className='w-6 h-6 text-blue-700' />}
        />
      </div>

    </TabLayout>
  )
}
