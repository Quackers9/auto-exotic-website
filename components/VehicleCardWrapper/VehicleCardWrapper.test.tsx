import { render, screen } from '@testing-library/react';
import { VehicleCardWrapper } from './VehicleCardWrapper';

describe('Vehicle Card Wrapper component', () => {
  it('has correct Next.js theming section link', () => {
    render(<VehicleCardWrapper vehicles={[]} />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
