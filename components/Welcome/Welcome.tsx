import { Container, Title, Text } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'white', to: 'lightblue' }}
              >
                Auto Exotics
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan morbi platea,
              per massa eu fames mattis nostra feugiat nunc non sapien.
            </Text>

            {/* <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
