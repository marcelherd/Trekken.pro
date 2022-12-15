import { useState } from "react";
import { Collapse } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { LinkItem } from "./LinkItem/LinkItem";
import { LinkItemExpandable } from "./LinkItemExpandable/";
import { Link } from "./Link";
import { useRouter } from "next/router";
import type { Role } from "@prisma/client";
import { useSession } from "next-auth/react";

export type LinkItemGroupProps = {
  icon: TablerIcon;
  label: string;
  href?: string;
  requiresAuthentication?: boolean;
  requiredRole?: Role;
  initiallyExpanded?: boolean;
  children?: { label: string; href: string }[];
};

export const LinkItemGroup: React.FC<LinkItemGroupProps> = ({
  icon,
  label,
  href,
  requiresAuthentication,
  requiredRole,
  initiallyExpanded,
  children,
}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const shouldExpand = children?.some((link) => link.href === router.pathname);
  const active = href === router.pathname || shouldExpand;

  const [expanded, setExpanded] = useState(
    (shouldExpand || initiallyExpanded) ?? false
  );

  if (requiresAuthentication && !session) return null;
  if (requiredRole && (!session || !session.user?.roles.includes(requiredRole)))
    return null;

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
          active={active}
        />
        <Collapse in={expanded}>{items}</Collapse>
      </>
    );
  }

  return <LinkItem icon={icon} label={label} href={href} active={active} />;
};
