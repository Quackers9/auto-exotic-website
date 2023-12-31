import { render, screen } from '@testing-library/react';
import { HeaderMiddle } from './Header';

describe('Header component', () => {
  it('has correct Next.js theming section link', () => {
    render(<HeaderMiddle links={[]} />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
