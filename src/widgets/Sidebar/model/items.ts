import React from "react";
import { RoutePath } from "shared/config/routeConfig/routerConfig";
import AboutIcon from "shared/assets/icons/clarity_list-outline-badged.svg";
import MainIcon from "shared/assets/icons/Vector.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: "Главная",
        icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: "Сайт",
        icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: "Профиль",
        icon: AboutIcon,
    },
];
