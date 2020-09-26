import { EmptyState,Page, Heading, Card, ResourceList, ResourceItem, TextStyle } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import dbConnect  from '../database/dbConnect';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { empty } from 'apollo-boost';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

//dbConnect();

const GET_SHOP = gql`
query {
  shop {
    name
    storefrontUrl
    url
  }
}`

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  const [emptyState, setEmptyState] = useState(true);
  return (
    <Page fullWidth={true}>    
        {emptyState ? <Landing/> : null
        }  
    </Page>
  )
}

const Landing = () => {
  const router = useRouter();
  return (
  <EmptyState
    heading="Create your own customizable product builder"
    action={{ content: 'Get Started', onAction: () => router.push('/products') }}
    image={img}
  >
    <p>Secure, simple and blazing fast.</p>
  </EmptyState>
  );
}


export default Index;