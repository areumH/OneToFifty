'use client';

import Image from 'next/image';
import lightIcon from '../../../public/image/light_mode.png';
import darkIcon from '../../../public/image/dark_mode.png';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const ThemeButton = () => {
    return theme === 'dark' ? (
      <Image src={lightIcon} alt="light_icon" />
    ) : (
      <Image src={darkIcon} alt="dark_icon" />
    );
  };

  return (
    <div className="flex items-center w-16 h-9 bg-black dark:bg-white rounded-full p-1">
      <div
        onClick={handleTheme}
        className="w-7 h-7 bg-white dark:bg-black rounded-full cursor-pointer dark:translate-x-7 transition-transform duration-300"
      >
        <ThemeButton />
      </div>
    </div>
  );
}
