import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import LightMode from 'shared/assets/icons/lightMode.svg';
import DarkMode from 'shared/assets/icons/darkMode.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkMode /> : <LightMode />}
        </Button>
    );
};
