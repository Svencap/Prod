import { ReactNode } from "react";
import i18ConfigForTests from "shared/config/i18nConfig/configForTesting";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

export interface ComponentRenderOptions {
  route?: string;
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = "/" } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18ConfigForTests}>{component}</I18nextProvider>,
    </MemoryRouter>
  );
};
