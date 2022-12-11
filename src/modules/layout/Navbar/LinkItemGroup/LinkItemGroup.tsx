import { useState } from "react";
import { Collapse } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { LinkItem } from "./LinkItem/LinkItem";
import { LinkItemExpandable } from "./LinkItemExpandable/";
import { Link } from "./Link";
import { useRouter } from "next/router";

export type LinkItemGroupProps = {
  icon: TablerIcon;
  label: string;
  href?: string;
  initiallyExpanded?: boolean;
  children?: { label: string; href: string }[];
};

export const LinkItemGroup: React.FC<LinkItemGroupProps> = ({
  icon,
  label,
  href,
  initiallyExpanded,
  children,
}) => {
  const router = useRouter();
  const shouldExpand = children?.some((link) => link.href === router.pathname);
  const [expanded, setExpanded] = useState(
    (shouldExpand || initiallyExpanded) ?? false
  );

  const hasChildren = children && children.length > 0;

  if (hasChildren) {
    const items = children.map((item) => (
      <Link key={item.label} label={item.label} href={item.href} />
    ));

    return (
      <>
        <LinkItemExpandable
          icon={icon}
          label={label}
          expanded={expanded}
          onClick={() => setExpanded((o) => !o)}
        />
        <Collapse in={expanded}>{items}</Collapse>
      </>
    );
  }

  return <LinkItem icon={icon} label={label} href={href} />;
};
