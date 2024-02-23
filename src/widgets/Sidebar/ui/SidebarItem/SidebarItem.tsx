import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/ui/AppLink";
import { memo } from "react";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    // const { item, collapsed } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            to={item.path}
            theme={AppLinkThemes.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
