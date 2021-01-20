import React, { useState, useCallback } from 'react';
import { useRouter } from "next/router";
import Header from "../../../app/components/Header";
import { Tabs } from "@shopify/polaris";

const Settings = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selected, setSelected] = useState(parseInt(router.query.tab) || 0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'general-settings',
      content: 'General',
      accessibilityLabel: 'General',
      panelID: 'general-settings-content',
    },
    {
      id: 'tabs-settings',
      content: 'Tabs',
      panelID: 'tabs-settings-content',
    },
    {
      id: 'baseimage-settings',
      content: 'Base Image',
      panelID: 'baseimage-settings-content',
    },
    {
      id: 'product-options-settings',
      content: 'Product Options',
      panelID: 'product-options-content',
    },
  ];

  return (
    <>
      <Header id={id} name="Custom Tshirts" />
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <p>Tab {selected}</p>
      </Tabs>
    </>
  );
};

export default Settings;
