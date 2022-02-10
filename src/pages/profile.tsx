import { H1 } from "src/styles/typography";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import Meta from "src/components/Meta";
import { Auth } from "aws-amplify";

const Profile = () => {
  return (
    <>
      <Meta schemaType="Welcome profile page" title="The profile page" description="Profile's description will be added shortly" />
      <div data-testid="page-wrapper">
        <H1>Welcome to Profile page</H1>
        <div>
          <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>Sign In with Google</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
