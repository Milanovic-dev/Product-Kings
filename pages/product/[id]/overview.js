import { useState } from "react";
import { useRouter } from "next/router";
import { Page, Layout, Card, Tag, Scrollable, Thumbnail, Subheading, Stack } from "@shopify/polaris";
import Header from '../../../app/components/Header';

import "../../../app/styles/Overview.css";

const Overview = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selected, setSelected] = useState([]);

  return (<>
    <Header id={id} name={'Custom Tshirts'} />
    <Page subtitle="Custom Thshirts" title="Overview" separator fullWidth>
      <Layout>
        <Layout.Section secondary>
          <Card title="Base Image" sectioned actions={[{ content: "Edit" }]}>
            <img
              style={{ borderRadius: 5 }}
              src={require("../../../images/test.jpg")}
              width="100%"
            />
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card title="Tabs" sectioned actions={[{ content: "Edit" }]}>
            <Stack>
              <Tag onRemove={() => {}}>Colors</Tag>
              <Tag onRemove={() => {}}>Sizes</Tag>
              <Tag onRemove={() => {}}>Wholesale</Tag>
              <Tag onRemove={() => {}}>Details</Tag>
              <Tag onRemove={() => {}}>Summary</Tag>
            </Stack>
          </Card>
          <Card title="Product Options" sectioned actions={[{ content: "Edit" }]}>
          <Scrollable shadow style={{height: '373px'}}>
              <Subheading>Upper body</Subheading>
            <Stack>
              <Thumbnail
              style={{ boxShadow: '0 2px 0 rgba(54,45,89,0.15), -0.1875rem -0.1875rem 0 0.1875rem #f2b712, 0 0 0 0.375rem #e1567c' }}
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
                size="large"
              />
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
                size="large"
              />
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
                size="large"
              />
              
            </Stack>
            <Subheading>Lower body</Subheading>
            <Stack>
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
                size="large"
              />
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
                size="large"
              />
            </Stack>
            </Scrollable>
          </Card>
        </Layout.Section>
        <Layout.Section fullWidth>
          <Card title="Theme" sectioned actions={[{ content: "Edit" }]}>
            <p>Palo Alto</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  </>);
};

export default Overview;
