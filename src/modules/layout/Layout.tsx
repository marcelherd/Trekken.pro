import {
  AppShell,
  useMantineTheme,
  Container,
  LoadingOverlay,
  Loader,
} from "@mantine/core";
import { type Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { NotAuthenticated, NotAuthorized } from "./Errors";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
  requiresAuthentication?: boolean;
  requiredRole?: Role;
};

export const Layout: React.FC<Props> = ({
  children,
  requiresAuthentication,
  requiredRole,
}) => {
  const { data: session, status } = useSession();
  const theme = useMantineTheme();
  const [open, setOpen] = useState(false);

  let pageContent = null;
  if ((requiresAuthentication || requiredRole) && status === "loading") {
    pageContent = <Loader />;
  } else if ((requiresAuthentication || requiredRole) && !session) {
    pageContent = <NotAuthenticated />;
  } else if (requiredRole && !session?.user?.roles.includes(requiredRole)) {
    pageContent = <NotAuthorized />;
  } else {
    pageContent = children;
  }

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
      <Container>{pageContent}</Container>
    </AppShell>
  );
};
