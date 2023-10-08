import { FaCheck, FaMoon, FaSun } from 'react-icons/fa6'
import { useEffect } from 'react';
import useThemeStore from '../store/theme'

export default function ThemeSwitch() {
  const { theme, setTheme } = useThemeStore()

  const applyDarkModeStyles = (isDarkMode) => {
    const htmlElement = document.documentElement;
    if (isDarkMode === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    applyDarkModeStyles(theme);
  }, [theme]);

  return (
    <div className='border border-gray-400 rounded-2xl bg-neutral-200/80'>
      <div
        className='flex items-center p-4'
        onClick={() => setTheme('light')}
      >
        <div className='flex items-center'>
          <FaSun className='w-5 h-5 mr-3 text-orange-600' />
          <span>
            Claro
          </span>
        </div>

        {theme === 'light' && (
          <FaCheck className='w-6 h-6 ml-auto text-green-500' />
        )}
      </div>

      <div className='border-t border-gray-400' />

      <div
        className='flex items-center p-4'
        onClick={() => setTheme('dark')}
      >
        <div className='flex items-center'>
          <FaMoon className='w-5 h-5 mr-3 text-blue-800' />
          <span>
            Oscuro
          </span>
        </div>

        {theme === 'dark' && (
          <FaCheck className='w-6 h-6 ml-auto text-green-500' />
        )}

      </div>
    </div>
  )
}
