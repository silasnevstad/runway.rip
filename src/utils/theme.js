import { useTheme } from 'next-themes';

export const toggleTheme = () => {
    const { theme, setTheme } = useTheme();
    setTheme(theme === 'light' ? 'dark' : 'light');
}