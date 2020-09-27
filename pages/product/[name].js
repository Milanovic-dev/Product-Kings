import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_SHOP = gql`
query {
  shop {
    name
  }
}`


const ProductPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Query query={GET_SHOP}>
      <p>
        POST:
        {name}
      </p>
    </Query>
  );
};

export default ProductPage;