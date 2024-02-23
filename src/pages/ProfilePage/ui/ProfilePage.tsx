import { BugButton } from "app/providers/BugButton";
import { profileReducer } from "entities/Profile/model/slice/profileSlice";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Input } from "shared/ui/Input/Input";

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
    const { t, i18n } = useTranslation("profile");

    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                {/* <BugButton /> */}
                {t("Страница профиля")}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
