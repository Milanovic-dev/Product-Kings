import { Page, Heading, Card, ResourceList, ResourceItem, TextStyle } from '@shopify/polaris';

const ShopProducts = () => {
  return (
    <Page fullWidth={true}>          
      <div style={{ marginTop: '45px', marginBottom: '10px', marginLeft:'2px' }}><Heading element="h1"><p style={{ fontSize: '20px' }}>Products</p></Heading></div>   
    </Page>
  )
}

const ProductList = ({items}) => {
  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'product', plural:'products' }}
        items={items}
        renderItem={(item) => {   
          return (
            <ResourceItem id={item.id} onClick={() => console.log(item.name)}>
              <h2>
                <TextStyle variation="strong">{item.name}</TextStyle>
              </h2>
              <div>Created: 29.06.2020</div>
            </ResourceItem>
          );
        }}
      ></ResourceList>
    </Card>
  );
}

export default ShopProducts;