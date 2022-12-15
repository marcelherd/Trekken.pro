import { Title, Text } from "@mantine/core";

export const NotAuthorized: React.FC = () => {
  return (
    <>
      <Title order={2}>Not authorized</Title>
      <Text>You are not authorized to view this page.</Text>
    </>
  );
};
