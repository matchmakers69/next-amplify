import { withSSRContext } from 'aws-amplify';

export async function authenticatedUsers(context: any) {
  const { Auth } = withSSRContext(context);
  try {
    await Auth.currentAuthenticatedUser();
    // console.log((await Auth.currentSession()).idToken.jwtToken);
  } catch (err) {
    console.log(err);

    return true;
  }
  return false;
}
