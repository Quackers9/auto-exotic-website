import { Title, Text } from '@mantine/core';
import useStyles from './AboutUs.styles';

export function AboutUs() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={80}>
        Your mum is {' '}
        <Text inherit variant="gradient" component="span">
          Sexy
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        wombo combo
      </Text>
    </>
  );
}
