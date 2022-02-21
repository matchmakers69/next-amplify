import { Auth } from 'aws-amplify';

type User = {
  email: string;
  password: string;
};

const loginAmplifyUser = async (loginUserData: User) => {
  const amplifyUser = await Auth.signIn({
    username: loginUserData.email,
    password: loginUserData.password,
  });
  return amplifyUser;
};

const logOutAmplifyUser = async () => {
  await Auth.signOut();
};

export { logOutAmplifyUser, loginAmplifyUser };
