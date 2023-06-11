import { Container, Center, Title } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { vehicles, VehicleClass } from '../data/vehicles';
import { VehicleCardWrapper } from '../components/VehicleCardWrapper/VehicleCardWrapper';

const groupBy = (xs: any, key: any) => xs.reduce((rv: any, x: any) => {
  // eslint-disable-next-line no-param-reassign
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

export default function HomePage() {
  const groupedVehicles = groupBy(vehicles, 'class');

  const xClass = groupedVehicles[VehicleClass.X];
  const sPlusClass = groupedVehicles[VehicleClass['S+']];
  const sClass = groupedVehicles[VehicleClass.S];
  const aPlusClass = groupedVehicles[VehicleClass['A+']];
  const aClass = groupedVehicles[VehicleClass.A];
  const bClass = groupedVehicles[VehicleClass.B];
  const cClass = groupedVehicles[VehicleClass.C];
  const dClass = groupedVehicles[VehicleClass.D];
  const mClass = groupedVehicles[VehicleClass.M];

  return (
    <>
      <Welcome />

      <Container>
        <Center>
          <Title order={1} underline mb={20}>Vehicles For Sale</Title>
        </Center>

        {xClass && <VehicleCardWrapper vehicles={xClass} /> }
        {sPlusClass && <VehicleCardWrapper vehicles={sPlusClass} /> }
        {sClass && <VehicleCardWrapper vehicles={sClass} /> }
        {aPlusClass && <VehicleCardWrapper vehicles={aPlusClass} /> }
        {aClass && <VehicleCardWrapper vehicles={aClass} /> }
        {bClass && <VehicleCardWrapper vehicles={bClass} /> }
        {cClass && <VehicleCardWrapper vehicles={cClass} /> }
        {dClass && <VehicleCardWrapper vehicles={dClass} /> }
        {mClass && <VehicleCardWrapper vehicles={mClass} /> }
      </Container>
    </>
  );
}
