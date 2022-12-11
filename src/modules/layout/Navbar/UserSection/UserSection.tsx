import { Menu } from "@mantine/core";
import { UnstyledButton, Group, Avatar, Text, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconChevronRight,
  IconLogout,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons";
import { signOut, useSession } from "next-auth/react";
import { useStyles } from "./UserSection.styles";

export const UserSection: React.FC = () => {
  const { data: session } = useSession();
  const mobile = useMediaQuery("(max-width: 768px)");
  const { classes } = useStyles();

  if (!session) {
    return null;
  }

  return (
    <Menu
      shadow="md"
      position={mobile ? "top" : "right-end"}
      offset={2}
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <Group>
            <Avatar
              src={session.user?.image}
              alt={session.user?.name ?? undefined}
              radius="xl"
            />

            <Box className={classes.userInfo}>
              <Text size="sm" weight={500}>
                {session.user?.name ?? "Anonymous"}
              </Text>

              <Text color="dimmed" size="xs">
                {session.user?.email ?? ""}
              </Text>
            </Box>

            <IconChevronRight size={14} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconUserCircle size={16} />}>View Profile</Menu.Item>
        <Menu.Item icon={<IconSettings size={16} />}>
          Edit Preferences
        </Menu.Item>
        <Menu.Item icon={<IconLogout size={16} />} onClick={() => signOut()}>
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
