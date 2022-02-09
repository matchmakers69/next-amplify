import { H1 } from "src/styles/typography";
import Meta from "src/components/Meta";

const Profile = () => {
  return (
    <>
      <Meta schemaType="Welcome profile page" title="The profile page" description="Profile's description will be added shortly" />
      <div data-testid="page-wrapper">
        <H1>Welcome to Profile page</H1>
      </div>
    </>
  );
};

export default Profile;
