import { Avatar, Title, Text, Paper } from '@mantine/core';
// import useStyles from './EmployeeCard.styles';
import { Employee } from '../../data/employees';

export function EmployeeCard(employee: Employee) {
  // const { classes } = useStyles();

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={employee.avatarUrl} size={120} radius={120} mx="auto" />
      <Title order={2} ta="center" weight={500} mt="md">
        {employee.name}
      </Title>
      <Text ta="center" c="dimmed" fz="lg" mt="xs">
        {employee.phoneNumber} • {employee.role}
      </Text>
    </Paper>
  );
}
