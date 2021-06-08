import Head from "next/head";
import SignUp from "../components/Auth/SignUp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <SignUp />
    </div>
  );
}
