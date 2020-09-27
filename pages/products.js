import { Page, Heading, Card, ResourceList, ResourceItem, TextStyle } from '@shopify/polaris';

const ShopProducts = () => {
  return (
    <Page fullWidth>          
      <div style={{ marginTop: '45px', marginBottom: '10px', marginLeft:'2px' }}><Heading element="h1"><p style={{ fontSize: '20px' }}>Products</p></Heading></div>   
    </Page>
  )
}

// eslint-disable-next-line no-unused-vars
const ProductList = ({items}) => {
  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'product', plural:'products' }}
        items={items}
        renderItem={(item) => {   
          return (
            <ResourceItem id={item.id} onClick={() => {}}>
              <h2>
                <TextStyle variation="strong">{item.name}</TextStyle>
              </h2>
              <div>Created: 29.06.2020</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export default ShopProducts;