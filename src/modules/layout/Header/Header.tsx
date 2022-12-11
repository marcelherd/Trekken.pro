import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
  TextInput,
  Flex,
  Box,
  Button,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconSearch,
  IconBell,
  IconDeviceDesktop,
  IconSettings,
} from "@tabler/icons";
import { signIn, useSession } from "next-auth/react";

type Props = {
  open: boolean;
  toggleOpen: () => void;
};

export const Header: React.FC<Props> = ({ open, toggleOpen }) => {
  const { data: session } = useSession();
  const mobile = useMediaQuery("(max-width: 576px)");
  const theme = useMantineTheme();

  return (
    <MantineHeader
      height={{ base: 70 }}
      p="md"
      styles={{
        root: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
    >
      <Flex>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={open}
            onClick={() => toggleOpen()}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Box sx={{ width: 200 }}>
            <Button color="pink" leftIcon={<IconDeviceDesktop size={20} />}>
              Download App
            </Button>
          </Box>
        </MediaQuery>
        <Box sx={{ flexGrow: 1 }}>
          <Center>
            <TextInput
              placeholder="Search"
              icon={<IconSearch size={12} stroke={1.5} />}
              mb="sm"
              styles={{
                input: {
                  width: mobile ? 200 : 420,
                },
              }}
            />
          </Center>
        </Box>
        <Box
          sx={(theme) => ({
            width: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: theme.spacing.sm,
            marginBottom: "12px",
          })}
        >
          {session ? (
            <>
              <ActionIcon>
                <IconSettings size={18} />
              </ActionIcon>
              <ActionIcon>
                <IconBell size={18} />
              </ActionIcon>
            </>
          ) : (
            <Button onClick={() => signIn()}>Sign in</Button>
          )}
        </Box>
      </Flex>
    </MantineHeader>
  );
};
