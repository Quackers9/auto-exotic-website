import { Card, Image, Text, Group, Badge } from '@mantine/core';
// import { IconGasStation } from '@tabler/icons-react';
import { Vehicle, VehicleClassLabel } from '../../public/vehicles';
import useStyles from './VehicleCard.styles';

export function VehicleCard(vehicle: Vehicle) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="sm" shadow="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={vehicle.imageUrl} alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <div>
          <Text fw={500}>{vehicle.name}</Text>
          <Text fz="xs" c="dimmed">
          {vehicle.seats} seats - {vehicle.upgrades}
          </Text>
        </div>
        <Badge variant="outline" size="lg">{VehicleClassLabel[vehicle.class]}</Badge>
      </Group>

      {/* <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          <Center>
            <IconGasStation size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">Test</Text>
          </Center>
        </Group>
      </Card.Section> */}

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {vehicle.price}
            </Text>
          </div>
        </Group>
      </Card.Section>
    </Card>
  );
}
