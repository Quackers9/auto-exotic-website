/* eslint-disable @typescript-eslint/dot-notation */

export interface Vehicle {
  id: string;
  name: string;
  class: VehicleClass;
  price: string;
  upgrades: string;
  seats: number;
  imageUrl: string;
  owner: string;
  ownerPhoneNumber: string;
}

export enum VehicleClass {
  'X',
  'S+',
  'S',
  'A+',
  'A',
  'B',
  'C',
  'D',
  'M', // Motorcycle
}

export const VehicleClassLabel = {
  [VehicleClass.X]: 'X',
  [VehicleClass['S+']]: 'S+',
  [VehicleClass.S]: 'S',
  [VehicleClass['A+']]: 'A+',
  [VehicleClass.A]: 'A',
  [VehicleClass.B]: 'B',
  [VehicleClass.C]: 'C',
  [VehicleClass.D]: 'D',
  [VehicleClass.M]: 'M',
};

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Jugular',
    class: VehicleClass['A'],
    price: '$400,000',
    upgrades: 'Full Upgraded',
    seats: 4,
    imageUrl: 'https://i.imgur.com/XxAK0ax.png',
    owner: 'Rex Jagger',
    ownerPhoneNumber: '92374978234',
  },
  {
    id: '2',
    name: 'Jugular',
    class: VehicleClass['A'],
    price: '$400,000',
    upgrades: 'Full Upgraded',
    seats: 4,
    imageUrl: 'https://i.imgur.com/XxAK0ax.png',
    owner: 'Rex Jagger',
    ownerPhoneNumber: '92374978234',
  },
  {
    id: '3',
    name: 'Jugular',
    class: VehicleClass['A'],
    price: '$400,000',
    upgrades: 'Full Upgraded',
    seats: 4,
    imageUrl: 'https://i.imgur.com/XxAK0ax.png',
    owner: 'Rex Jagger',
    ownerPhoneNumber: '92374978234',
  },
  {
    id: '4',
    name: 'Autarch',
    class: VehicleClass['S+'],
    price: '$1,000,000',
    upgrades: 'No Upgrades',
    seats: 2,
    imageUrl: 'https://i.imgur.com/0fqbwxR.png',
    owner: 'Sex Shagger',
    ownerPhoneNumber: '23461211145',
  },
  {
    id: '5',
    name: 'Autarch',
    class: VehicleClass['S+'],
    price: '$1,000,000',
    upgrades: 'No Upgrades',
    seats: 2,
    imageUrl: 'https://i.imgur.com/0fqbwxR.png',
    owner: 'Sex Shagger',
    ownerPhoneNumber: '23461211145',
  },
  {
    id: '6',
    name: 'Autarch',
    class: VehicleClass['B'],
    price: '$200,000 (or best offer)',
    upgrades: 'No Upgrades',
    seats: 2,
    imageUrl: 'https://static.wikia.nocookie.net/gtawiki/images/6/6c/Autarch-GTAO-front.png/revision/latest/scale-to-width-down/350?cb=20190106193205',
    owner: 'Sex Shagger',
    ownerPhoneNumber: '23461211145',
  },
];
