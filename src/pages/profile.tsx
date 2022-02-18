import { Typography } from 'src/styles/typography';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import Meta from 'src/components/Meta';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

type CognitoUser = {
  email: string;
};

const Profile = () => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user.attributes);
  }
  if (!user) return null;
  console.log(user, 'User checked on profile site');
  return (
    <>
      <Meta
        schemaType="Welcome profile page"
        title="The profile page"
        description="Profile's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <Typography variant="body1" component="p">
          Welcome, {user?.email}
        </Typography>
        <Typography variant="h1" component="h1">
          Welcome to Profile page
        </Typography>
        <div>
          <button
            onClick={() =>
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Google,
              })
            }
          >
            Sign In with Google
          </button>
          <button onClick={() => Auth.signOut()}>Sign out</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
