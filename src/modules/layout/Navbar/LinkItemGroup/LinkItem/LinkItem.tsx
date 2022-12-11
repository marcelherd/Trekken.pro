import { UnstyledButton, Group, Box, ThemeIcon } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { useStyles } from "./LinkItem.styles";

type Props = {
  icon: TablerIcon;
  label: string;
  href?: string;
};

export const LinkItem: React.FC<Props> = ({ icon: Icon, label, href }) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.control} component="a" href={href}>
      <Group position="apart" spacing={0}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ThemeIcon variant="light" size={30}>
            <Icon size={18} />
          </ThemeIcon>
          <Box ml="md">{label}</Box>
        </Box>
      </Group>
    </UnstyledButton>
  );
};
