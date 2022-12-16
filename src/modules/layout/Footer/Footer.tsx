import {
  Anchor,
  Flex,
  Footer as MantineFooter,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

export const Footer: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <MantineFooter
      height={45}
      p="md"
      withBorder={false}
      styles={{
        root: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
    >
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Flex gap="lg" justify="center">
          <Anchor component={Link} href="/privacy" size="xs" color="dimmed">
            Privacy Policy
          </Anchor>
          <Anchor component={Link} href="/terms" size="xs" color="dimmed">
            Terms of Use
          </Anchor>
          <Anchor component={Link} href="/feedback" size="xs" color="dimmed">
            Feedback
          </Anchor>
        </Flex>
      </MediaQuery>
    </MantineFooter>
  );
};
