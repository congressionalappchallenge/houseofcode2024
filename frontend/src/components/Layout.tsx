import React from 'react'
import { AppShell, Center, Group, ActionIcon, Avatar, Text, Container, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightCollapse } from '@tabler/icons-react'
import logo from '../assets/CAC-logo.svg'
import Navbar from './Navbar'
import classes from './layout.module.css'
import Map from './Map'

export function Layout (): React.ReactElement {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md" className={classes.logoGroup}>
            <Avatar src={logo} radius="xs" className={classes.logoImg} />

            {mobileOpened
              ? (<ActionIcon variant="transparent" aria-label="Collapse Navbar" onClick={toggleMobile} hiddenFrom="sm" size="sm">
                    <IconLayoutSidebarLeftCollapse style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ActionIcon>)
              : (<ActionIcon variant="transparent" aria-label="Show Navbar" onClick={toggleMobile} hiddenFrom="sm" size="sm">
                    <IconLayoutSidebarRightCollapse style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ActionIcon>)}

            {desktopOpened
              ? (<ActionIcon variant="transparent" aria-label="Collapse Navbar" size="lg" onClick={toggleDesktop}>
                    <IconLayoutSidebarLeftCollapse style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ActionIcon>)
              : (<ActionIcon variant="transparent" aria-label="Show Navbar" size="lg" onClick={toggleDesktop}>
                    <IconLayoutSidebarRightCollapse style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ActionIcon>)}
        </Group>
        <Center className={classes.headerTextContainer}>
            <h1 className={classes.headerText}>CAC House of Code 2024</h1>
        </Center>
      </AppShell.Header>
      <Container className={classes.layoutContainer}>
        {(desktopOpened || mobileOpened) ? <Navbar /> : <div className={classes.dummyNav} />}
        <AppShell.Main className={classes.mainContainer}>
            <Container>
                <Map />
            </Container>
        </AppShell.Main>
      </Container>
    </AppShell>
  )
}
