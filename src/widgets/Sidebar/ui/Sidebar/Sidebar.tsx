import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ButtomSize, Button, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routerConfig";
import AboutIcon from "shared/assets/icons/clarity_list-outline-badged.svg";
import MainIcon from "shared/assets/icons/Vector.svg";
import { sidebarItemsList } from "widgets/Sidebar/model/items";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
                square
                size={ButtomSize.L}
                className={cls.collapseBtn}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
