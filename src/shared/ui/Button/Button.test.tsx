import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Render Test Button', () => {
    test('in the Document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
