import { Title, Grid } from '@mantine/core';
import { VehicleCard } from '../VehicleCard/VehicleCard';
import { Vehicle, VehicleClassLabel } from '../../public/vehicles';
import useStyles from './VehicleCardWrapper.styles';

export function VehicleCardWrapper({ vehicles }: { vehicles: Vehicle[] }) {
  const { classes } = useStyles();

  const classVehicles = vehicles.map((vehicle) => (
    <Grid.Col key={vehicle.id} xs={4}>
      <VehicleCard {...vehicle} />
    </Grid.Col>
  ));

  return (
    <>
      <Title order={2} className={classes.root} mb={20}>
        {VehicleClassLabel[vehicles[0].class]} Class
      </Title>

      <Grid>
        {classVehicles}
      </Grid>

      <div className={classes.divider} />
    </>
  );
}
