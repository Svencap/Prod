import { BugButton } from 'app/providers/BugButton';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const ProfilePage = () => {
    const { t, i18n } = useTranslation('profile');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {/* <BugButton /> */}
            {t('Страница профиля')}
        </div>
    );
};

export default ProfilePage;
