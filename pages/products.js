/* eslint-disable no-underscore-dangle */
import { Page, Heading, Card, ResourceList, ResourceItem, TextStyle, Button } from '@shopify/polaris';
import { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_SHOP = gql`
query {
  shop {
    name
  }
}`

const ShopProducts = () => {
  const [items, setItems] = useState(null);

  const fetchProducts = (shop) => {
    fetch(`/api/products?shopOrigin=${shop.name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      const body = await response.json();
      setItems(body);
    })
  }

  return (
    <Query query={GET_SHOP}>
      {({data, loading, error}) => {
        if(loading) return <div>Loading</div>;
        if(error) return <div>{error.message}</div>

        if(!items){
          fetchProducts(data.shop);
        }

        return (
          <Page fullWidth>          
            <div style={{ marginTop: '45px', marginBottom: '10px', marginLeft:'3px' }}>
              <Heading element="h1"><p style={{ fontSize: '20px' }}>Products</p></Heading>
              <Button primary>New</Button>
            </div>   
            <ProductList items={items} />
          </Page>
        );
      }}
    </Query>
  )
}

// eslint-disable-next-line no-unused-vars
const ProductList = ({items}) => {
  if(!items) return <div>Loading</div>;

  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'product', plural:'products' }}
        items={items}
        renderItem={(item) => {   
          return (
            <ResourceItem id={item._id} onClick={() => {console.log(item)}}>
              <h2>
                <TextStyle variation="strong">{item.name}</TextStyle>
              </h2>
              <div>Created: 29.06.2020</div>
              <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="32" height="32" />
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export default ShopProducts;