import { Title, Text } from "@mantine/core";

export const NotAuthenticated: React.FC = () => {
  return (
    <>
      <Title order={2}>Not authenticated</Title>
      <Text>You must be signed in to view this page.</Text>
    </>
  );
};
