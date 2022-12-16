import { Title } from "@mantine/core";
import Head from "next/head";
import { Layout } from "../modules/layout";
import { type NextPageWithLayout } from "./_app";

const Mods: NextPageWithLayout = () => {
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
      <Title order={2}>Mods</Title>
    </>
  );
};

Mods.getLayout = (page) => <Layout>{page}</Layout>;

export default Mods;
