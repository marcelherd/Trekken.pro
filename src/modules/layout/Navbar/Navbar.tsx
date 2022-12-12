import {
  Navbar as MantineNavbar,
  ScrollArea,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
} from "@mantine/core";
import {
  IconBarbell,
  IconDatabase,
  IconGauge,
  IconSettings,
  IconUsers,
} from "@tabler/icons";
import { Logo } from "./Logo";
import { useStyles } from "./Navbar.styles";
import type { LinkItemGroupProps } from "./LinkItemGroup";
import { LinkItemGroup } from "./LinkItemGroup";
import { UserSection } from "./UserSection";
import { useSession } from "next-auth/react";

const routes: LinkItemGroupProps[] = [
  { icon: IconGauge, label: "Dashboard", href: "/dashboard" },
  { icon: IconUsers, label: "Characters", href: "/" },
  { icon: IconGauge, label: "Leaderboards", href: "/leaderboards" },
  { icon: IconBarbell, label: "Competitive", href: "/competitive" },
  { icon: IconDatabase, label: "Mods", href: "/mods" },
  {
    icon: IconSettings,
    label: "Administration",
    children: [
      { label: "Manage Users", href: "/admin/users" },
      { label: "Manage Characters", href: "/admin/characters" },
    ],
  },
];

type Props = {
  open: boolean;
  toggleOpen: () => void;
};

export const Navbar: React.FC<Props> = ({ open, toggleOpen }) => {
  const { data: session } = useSession();
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const links = routes.map((link) => (
    <LinkItemGroup {...link} key={link.label} />
  ));

  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!open}
      width={{ sm: 250, lg: 300 }}
      className={classes.navbar}
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={open}
          onClick={() => toggleOpen()}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>

      <MantineNavbar.Section className={classes.header}>
        <Logo />
      </MantineNavbar.Section>

      <MantineNavbar.Section
        grow
        component={ScrollArea}
        className={classes.main}
      >
        <Box className={classes.links}>{links}</Box>
      </MantineNavbar.Section>

      {session && (
        <MantineNavbar.Section className={classes.footer}>
          <UserSection />
        </MantineNavbar.Section>
      )}
    </MantineNavbar>
  );
};
