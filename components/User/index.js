import React from 'react';

function User({userInfo}) {

  console.log(userInfo);

  return (
    <div>
      <h1>{userInfo[0].name}</h1>
    </div>
  );
}

export default User;
