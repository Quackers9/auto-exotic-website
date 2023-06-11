import { render, screen } from '@testing-library/react';
import { VehicleCard } from './VehicleCard';

const testVehicle = {
  id: '1',
  name: 'Jugular',
  class: 1,
  price: '400,000',
  upgrades: 'Full Upgraded',
  seats: 4,
  imageUrl: 'https://static.wikia.nocookie.net/gtawiki/images/9/98/Jugular-GTAO-front.png/revision/latest/scale-to-width-down/350?cb=20190723230439',
  owner: 'Rex Jagger',
  ownerPhoneNumber: '92374978234',
};

describe('Vehicle Card component', () => {
  it('has correct Next.js theming section link', () => {
    render(<VehicleCard {...testVehicle} />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
