import { BugButton } from 'app/providers/BugButton';
import { Counter } from 'entities/Counter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');

    return (
        <div>
            {/* <BugButton /> */}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
