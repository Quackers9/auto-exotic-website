import { render, screen } from '@testing-library/react';
import { AboutUs } from './AboutUs';

describe('About Us component', () => {
  it('has correct Next.js theming section link', () => {
    render(<AboutUs />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
