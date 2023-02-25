import { ReactNode } from 'react';
import i18ConfigForTests from 'shared/config/i18nConfig/configForTesting';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

export const renderWithTranslations = (component: ReactNode) => render(
    <I18nextProvider i18n={i18ConfigForTests}>
        {component}
    </I18nextProvider>,
);
