import { withSSRContext } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next';
import Amplify from 'aws-amplify';
import config from 'src/aws-exports';

Amplify.configure({ ...config, srr: true });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { Auth } = withSSRContext({ req });
  try {
    // get user session
    const user = await Auth.currentAuthenticatedUser();
    res.json({ user });
  } catch (err) {
    res.json({ user: null });
  }
};
