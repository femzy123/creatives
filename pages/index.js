import Head from "next/head";
import Layout from '../components/Layout'
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
}
