import Head from "next/head";
import { type NextPageWithLayout } from "./_app";
import { DashboardScreen } from "../modules/dashboard/DashboardScreen";
import { Layout } from "../modules/layout";

const Dashboard: NextPageWithLayout = () => {
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
      <DashboardScreen />
    </>
  );
};

Dashboard.getLayout = (page) => <Layout requiresAuthentication>{page}</Layout>;

export default Dashboard;
