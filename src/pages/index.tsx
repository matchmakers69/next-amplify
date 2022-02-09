import Meta from "src/components/Meta";

const Home = () => {
  return (
    <>
      <Meta
        schemaType="Welcome home page"
        title="The Fate of Empires"
        description="The only thing we learn from history, it has been said, 'is that men never learn from history'..."
      />

      <div data-testid="page-wrapper">
        <h1>Welcome to Website</h1>
      </div>
    </>
  );
};

export default Home;
