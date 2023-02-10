import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/ui/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher /> 
      <div className={cls.links}>
      <AppLink to={"/"} theme={AppLinkThemes.SECONDARY} className={cls.mainLink}>Главная</AppLink>
      <AppLink to={"/about"} theme={AppLinkThemes.SECONDARY}>О сайте</AppLink>
      </div>
    </div>
  );
};