import { UnstyledButton, Group, Box, ThemeIcon } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { useStyles } from "./LinkItem.styles";

type Props = {
  icon: TablerIcon;
  label: string;
  href?: string;
  active?: boolean;
};

export const LinkItem: React.FC<Props> = ({
  icon: Icon,
  label,
  href,
  active,
}) => {
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton className={classes.control} component="a" href={href}>
      <Group position="apart" spacing={0}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ThemeIcon
            variant="light"
            color={active ? "red" : undefined}
            size={30}
          >
            <Icon size={18} />
          </ThemeIcon>
          <Box ml="md" className={cx({ [classes.active]: active })}>
            {label}
          </Box>
        </Box>
      </Group>
    </UnstyledButton>
  );
};
