import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import LightMode from 'shared/assets/icons/lightMode.svg';
import DarkMode from 'shared/assets/icons/darkMode.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkMode /> : <LightMode />}
        </Button>
    );
});
