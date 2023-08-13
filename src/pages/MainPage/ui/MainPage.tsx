import { BugButton } from 'app/providers/BugButton';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {/* <BugButton /> */}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
