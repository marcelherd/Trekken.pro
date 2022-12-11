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
      height={60}
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
          <Anchor component={Link} href="/">
            Privacy Policy
          </Anchor>
          <Anchor component={Link} href="/">
            Terms of Use
          </Anchor>
          <Anchor component={Link} href="/">
            Feedback
          </Anchor>
        </Flex>
      </MediaQuery>
    </MantineFooter>
  );
};
