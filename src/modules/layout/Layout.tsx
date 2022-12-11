import {
  AppShell,
  Burger,
  MediaQuery,
  useMantineTheme,
  Text,
  Container,
} from "@mantine/core";
import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const [open, setOpen] = useState(false);

  return (
    <AppShell
      layout="alt"
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      header={<Header open={open} toggleOpen={() => setOpen((o) => !o)} />}
      navbar={<Navbar open={open} toggleOpen={() => setOpen((o) => !o)} />}
    >
      <Container>{children}</Container>
    </AppShell>
  );
};
