import { Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useStyles } from "./Link.styles";

type Props = {
  label: string;
  href: string;
};

export const Link: React.FC<Props> = ({ label, href }) => {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const activeRoute = router.pathname === href;

  return (
    <Text<"a">
      component="a"
      className={cx(classes.link, { [classes.active]: activeRoute })}
      href={href}
      key={label}
    >
      {label}
    </Text>
  );
};
