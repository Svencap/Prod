import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import cls from "./Sidebar.module.scss";
import { ButtomSize, Button, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routerConfig";
import AboutIcon from "shared/assets/icons/clarity_list-outline-badged.svg";
import MainIcon from "shared/assets/icons/Vector.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtomSize.L}
        className={cls.collapseBtn}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkThemes.SECONDARY}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}> {t("Главная")}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          className={cls.item}
          theme={AppLinkThemes.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}> {t("Сайт")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
