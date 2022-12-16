import { Title } from "@mantine/core";
import { Role } from "@prisma/client";
import Head from "next/head";
import { Layout } from "../../modules/layout";
import { type NextPageWithLayout } from "../_app";

const CharactersAdmin: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Trekken</title>
        <meta
          name="description"
          content="Statistics and performance tracking for Tekken"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title order={2}>Admin - Characters</Title>
    </>
  );
};

CharactersAdmin.getLayout = (page) => (
  <Layout requiredRole={Role.ADMIN}>{page}</Layout>
);

export default CharactersAdmin;
