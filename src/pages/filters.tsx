import { useAppSelector } from 'src/app/hooks';
import Meta from 'src/components/Meta';
import { Typography } from 'src/styles/typography';

function Filters() {
  const { products } = useAppSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <Meta
        schemaType="Welcome Filters page"
        title="This is Filters page"
        description="Description soon"
      />

      <div data-testid="page-wrapper">
        <Typography variant="h2" component="h1">
          Welcome to Filters page
        </Typography>
      </div>
    </>
  );
}

export default Filters;
