import { useAppSelector } from 'src/app/hooks';
import Meta from 'src/components/Meta';
import { Typography } from 'src/styles/typography';

function SSRRedux() {
  const { products } = useAppSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <Meta schemaType="SRR Redux example" title="This SRR Redux" description="Description soon" />

      <div data-testid="page-wrapper">
        <Typography variant="h2" component="h1">
          SSR Redux example
        </Typography>
      </div>
    </>
  );
}

export default SSRRedux;
