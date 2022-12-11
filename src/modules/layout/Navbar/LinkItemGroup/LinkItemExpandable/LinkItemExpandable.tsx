import { UnstyledButton, Group, Box, ThemeIcon } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { useStyles } from "./LinkItemExpandable.styles";

type Props = {
  icon: TablerIcon;
  label: string;
  expanded: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
};

export const LinkItemExpandable: React.FC<Props> = ({
  icon: Icon,
  label,
  expanded,
  onClick,
  active,
}) => {
  const { classes, theme, cx } = useStyles();

  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

  return (
    <UnstyledButton className={classes.control} onClick={onClick}>
      <Group position="apart">
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
        <ChevronIcon
          className={classes.chevron}
          size={14}
          stroke={1.5}
          style={{
            transform: expanded
              ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
              : "none",
          }}
        />
      </Group>
    </UnstyledButton>
  );
};
