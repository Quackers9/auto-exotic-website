import { EmployeeCard } from './EmployeeCard';

export default {
  title: 'Employee Card',
};

const testEmployee = {
  name: 'Parker Laslold',
  phoneNumber: '0872676723',
  role: 'Owner',
  avatarUrl: 'https://i.imgur.com/myIKtNY.gif',
};

export const Usage = () => <EmployeeCard {...testEmployee} />;
