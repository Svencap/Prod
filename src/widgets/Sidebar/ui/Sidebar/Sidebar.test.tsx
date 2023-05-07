import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslations,
} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';

describe('Test Sidebar', () => {
    test('test render', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle sidebar', () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
