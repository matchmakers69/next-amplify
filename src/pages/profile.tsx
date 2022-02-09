import Meta from "src/components/Meta";

const Profile = () => {
  return (
    <>
      <Meta schemaType="Welcome profile page" title="The profile page" description="Profile's description will be added shortly" />

      <div data-testid="page-wrapper">
        <h1>Welcome to Profile page</h1>
      </div>
    </>
  );
};

export default Profile;
