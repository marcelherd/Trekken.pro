import { Text } from "@mantine/core";
import { useStyles } from "./Link.styles";

type Props = {
  label: string;
  href: string;
};

export const Link: React.FC<Props> = ({ label, href }) => {
  const { classes } = useStyles();

  return (
    <Text<"a"> component="a" className={classes.link} href={href} key={label}>
      {label}
    </Text>
  );
};
