import { BugButton } from 'app/providers/BugButton';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
    const { t, i18n } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                {/* <BugButton /> */}
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
