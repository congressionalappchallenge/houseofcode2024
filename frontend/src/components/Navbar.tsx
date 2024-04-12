import { useState } from 'react'
import { Tooltip, UnstyledButton, Stack, AppShell, rem } from '@mantine/core'
import {
  IconHome2,
  IconMapPinSearch,
  IconDeviceDesktopAnalytics
} from '@tabler/icons-react'
import classes from './navbar.module.css'

interface NavbarLinkProps {
  icon: typeof IconHome2
  label: string
  active?: boolean
  onClick?: () => void
}

function NavbarLink ({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const navLinkData = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconMapPinSearch, label: 'Map' },
  { icon: IconDeviceDesktopAnalytics, label: 'Table' }
]

export default function Navbar () {
  const [active, setActive] = useState(0)

  const links = navLinkData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => { setActive(index) }}
    />
  ))

  return (
    <AppShell.Navbar p="md" className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </AppShell.Navbar>
  )
}
