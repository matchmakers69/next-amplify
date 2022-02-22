import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';

const SocialLogIn = () => {
  return (
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
    </div>
  );
};

export default SocialLogIn;
