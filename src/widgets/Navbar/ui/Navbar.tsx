import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkThemes.SECONDARY} className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkThemes.SECONDARY}>{t('Сайт')}</AppLink>
            </div>
        </div>
    );
};
