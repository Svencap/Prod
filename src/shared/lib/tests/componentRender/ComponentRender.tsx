import { ReactNode } from 'react';
import i18ConfigForTests from 'shared/config/i18nConfig/configForTesting';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const ComponentRender = (
    component: ReactNode,
    options: ComponentRenderOptions = {},
) => {
    const { route = '/', initialState } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18ConfigForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
