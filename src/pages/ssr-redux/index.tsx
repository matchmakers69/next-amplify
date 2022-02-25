import wrapper from 'src/app/store';
import Meta from 'src/components/Meta';
import { getProducts } from 'src/features/products/actions';
import { IProduct } from 'src/interfaces';
import { Typography } from 'src/styles/typography';

type ISrrReduxProps = {
  products: IProduct[];
};

function SSRRedux({ products }: ISrrReduxProps) {
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const res = await store.dispatch(getProducts());

  return {
    props: {
      products: res?.payload,
    },
  };
});

export default SSRRedux;
