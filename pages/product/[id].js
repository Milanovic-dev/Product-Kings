import React, {useState} from 'react';
import {useRouter} from 'next/router';
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
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  const fetchProduct = (shop) => {
    fetch(`/api/product/${id}?shopOrigin=${shop.name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      const data = await response.json();
      setProduct(data);
    })
  }

  return (
    <Query query={GET_SHOP}>
      {({data, loading, error}) => {
        if(loading) return <div>Loading</div>;
        if(error) return <div>{error.message}</div>

        if(!product) {
          fetchProduct(data.shop);
        }

        return <div>Product</div>;
      }}
    </Query>
  );
};

export default ProductPage;