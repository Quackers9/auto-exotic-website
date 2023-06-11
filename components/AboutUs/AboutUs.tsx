import { Container, Title, Text, Grid } from '@mantine/core';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { employees } from '../../data/employees';
import useStyles from './AboutUs.styles';

export function AboutUs() {
  const { classes } = useStyles();

  const employeeCards = employees.map((employee: any, index: number) => (
    <Grid.Col key={index} xs={4}>
      <EmployeeCard {...employee} />
    </Grid.Col>
  ));

  return (
    <>
      <Title className={classes.title} align="center" mt={60} mb={80}>
        <Text inherit variant="gradient" component="span">
          Employees
        </Text>
      </Title>

      <Container>
        <Grid>
          {employeeCards}
        </Grid>
      </Container>
    </>
  );
}
