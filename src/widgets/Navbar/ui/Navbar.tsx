import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" theme={AppLinkThemes.SECONDARY} className={cls.mainLink}>Главная</AppLink>
            <AppLink to="/about" theme={AppLinkThemes.SECONDARY}>О сайте</AppLink>
        </div>
    </div>
);
