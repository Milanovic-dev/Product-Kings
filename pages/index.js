import { EmptyState,Page } from '@shopify/polaris';
import { useState } from 'react'
import { useRouter } from 'next/router';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  // eslint-disable-next-line no-unused-vars
  const [emptyState, setEmptyState] = useState(true);
  return (
    <Page fullWidth>    
      {emptyState ? <Landing /> : null}  
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