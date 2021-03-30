import React, { useEffect } from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import { pathOr } from "ramda";
import Profile from "../../components/User"
import creatives from "../../data/users.json";

export default function User() {
  const router = useRouter();
  const userId = pathOr('', ['query', 'id'], router);

  

  const userInfo = creatives.data.filter(creative => creative.id === parseInt(userId));
console.log(userInfo);

if (userInfo.length < 1) {
  return(
    <div>Loading...</div>
  )
}

  return (
    <div>
      <Head>
        <title>Creative</title>
      </Head>

      <Profile userInfo={userInfo} />
      
    </div>
  );
}
