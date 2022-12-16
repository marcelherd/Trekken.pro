import Head from "next/head";
import { type NextPageWithLayout } from "./_app";
import { Layout } from "../modules/layout";
import { Title } from "@mantine/core";

const TermsOfUse: NextPageWithLayout = () => {
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
      <Title order={2}>Terms of Use</Title>
    </>
  );
};

TermsOfUse.getLayout = (page) => <Layout>{page}</Layout>;

export default TermsOfUse;
