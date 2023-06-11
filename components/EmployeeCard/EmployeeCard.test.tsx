import { render, screen } from '@testing-library/react';
import { EmployeeCard } from './EmployeeCard';

describe('Employee Card component', () => {
  it('has correct Next.js theming section link', () => {
    render(<EmployeeCard />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
