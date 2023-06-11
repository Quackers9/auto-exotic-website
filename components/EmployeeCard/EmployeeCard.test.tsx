import { render, screen } from '@testing-library/react';
import { EmployeeCard } from './EmployeeCard';

const testEmployee = {
  name: 'Parker Laslold',
  phoneNumber: '0872676723',
  role: 'Owner',
  avatarUrl: 'https://i.imgur.com/myIKtNY.gif',
};

describe('Employee Card component', () => {
  it('has correct Next.js theming section link', () => {
    render(<EmployeeCard {...testEmployee} />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
