import { Page, Form, FormLayout, TextField, Button } from '@shopify/polaris';
import { useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useRouter } from 'next/router';

const GET_SHOP = gql`
query {
  shop {
    name
    storefrontUrl
    url
  }
}`

const CreateProduct = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (data) => {
    setSubmitting(true);
    fetch(`/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({shop: data.shop.name, name}),
    }).then(async (response) => {
      if(response.status === 201){
        setSubmitting(false);
        const { _id } = await response.json();     
        router.push(`/product/${_id}`);
      }
    });
  }

  return (
    <Page>
      <div style={{ marginTop: 150 }}>
        <Query query={GET_SHOP}>
          {({data, loading, error}) => {
          if(loading) return <div>Loading</div>;
          if(error) return <div>{error.message}</div>;
          
          return (
            <Form onSubmit={() => handleSubmit(data)}>
              <FormLayout>
                <TextField
                  error={error}
                  value={name}
                  onChange={newName => setName(newName)}
                  label="Enter a name for this product builder"
                  type="text"
                  helpText={<span>Pick any name you want. This is how product builder will be shown in the product list.</span>}
                />
                <Button primary loading={submitting} submit>Create</Button>
              </FormLayout>
            </Form>
          );
        }}
        </Query>
      </div>
    </Page>
  );
};

export default CreateProduct;