import { Title } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import { Layout } from "../modules/layout";

const Dashboard: NextPage = () => {
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
      <Layout>
        <Title>Dashboard</Title>
      </Layout>
    </>
  );
};

export default Dashboard;
