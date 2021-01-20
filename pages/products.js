/* eslint-disable no-underscore-dangle */
import {
  Page,
  Card,
  ResourceList,
  ResourceItem,
  TextStyle
} from "@shopify/polaris";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsPageSkeleton from '../app/skeletons/ProductsPageSkeleton';

const ShopProducts = () => {
  const router = useRouter();
  const [items, setItems] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setItems([{ _id: 1, name: "Product" }]);
    }, 2000);
  }, []);

  return (
    <Page
      title="Products"
      separator
      fullWidth
      primaryAction={{
        content: "Create",
        onAction: () => router.push("/product/create"),
      }}
    >
      <ProductList router={router} items={items} />
    </Page>
  );
};

// eslint-disable-next-line no-unused-vars
const ProductList = ({ items, router }) => {
  if (!items) return <ProductsPageSkeleton />;

  return (
    <Card>
      <ResourceList
        resourceName={{ singular: "product", plural: "products" }}
        items={items}
        renderItem={(item) => (
          <ResourceItem
            id={item._id}
            onClick={() => {
              router.push(`/product/${item._id}/overview`);
            }}
          >
            <h2>
              <TextStyle variation="strong">{item.name}</TextStyle>
            </h2>
            <div>Created: 29.06.2020</div>
            <img
              src={require('../images/test.jpg')}
              alt="Lamp"
              width="32"
              height="32"
            />
          </ResourceItem>
        )}
      />
    </Card>
  );
};


export default ShopProducts;
