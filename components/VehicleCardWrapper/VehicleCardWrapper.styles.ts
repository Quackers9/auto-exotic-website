import { createStyles, rem } from '@mantine/core';

export default createStyles(() => ({
  root: {
    textAlign: 'left',
  },

  divider: {
    width: rem(500),
    maxWidth: '90%',
    height: '1px',
    backgroundColor: 'grey',
    margin: `${rem(60)} auto ${rem(60)}`,
  },
}));
