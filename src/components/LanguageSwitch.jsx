import { FaCheck } from 'react-icons/fa6'
import mex from '../assets/icons/mexico.png'
import uk from '../assets/icons/reino-unido.png'
import useLanguageStore from '../store/language'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguageStore()

  console.log(language)

  return (
    <div className='border border-gray-400 rounded-2xl bg-neutral-200/80'>
      <div
        className='flex items-center p-4'
        onClick={() => setLanguage('es')}
      >
        <div className='flex items-center'>
          <img src={mex} alt='' className='mr-3 h-7' />
          <span>
            Español
          </span>
        </div>

        {language === 'es' && (
          <FaCheck className='w-6 h-6 ml-auto text-green-500' />
        )}
      </div>

      <div className='border-t border-gray-400' />

      <div
        className='flex items-center p-4'
        onClick={() => setLanguage('en')}
      >
        <div className='flex items-center'>
          <img src={uk} alt='' className='mr-3 h-7' />
          <span>
            Ingles
          </span>
        </div>

        {language === 'en' && (
          <FaCheck className='w-6 h-6 ml-auto text-green-500' />
        )}

      </div>
    </div>
  )
}
