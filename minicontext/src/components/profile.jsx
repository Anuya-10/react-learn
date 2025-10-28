import React, { useContext } from 'react';
import UserContext from '../content/usercontext.js';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return (
    <>
      <div>Welcome {user.username} 🎉</div>
      <p>Your password is: {user.password}</p>
    </>
  );
}

export default Profile;
