import Meta from 'src/components/Meta';
import { Typography } from 'src/styles/typography';

const Home = () => {
  return (
    <>
      <Meta
        schemaType="Welcome home page"
        title="The Fate of Empires"
        description="The only thing we learn from history, it has been said, 'is that men never learn from history'..."
      />

      <div data-testid="page-wrapper">
        <Typography variant="h1" component="h1">
          Welcome to Website
        </Typography>
      </div>
    </>
  );
};

export default Home;
