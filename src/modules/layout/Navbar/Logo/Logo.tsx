import { Group, Title } from "@mantine/core";
import { IconBrandAppleArcade } from "@tabler/icons";

export const Logo: React.FC = () => {
  return (
    <Group>
      <IconBrandAppleArcade />
      <Title size="h3">Trekken.pro</Title>
    </Group>
  );
};
