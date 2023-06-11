import { useState } from 'react';
import { Header, Group, Container, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Image from 'next/image';
import useStyles from './Header.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0]?.link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={0}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Image width="90" height="40" src="/logo.webp" alt="Logo" />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ColorSchemeToggle />
        </Group>
      </Container>
    </Header>
  );
}
