"use client"

import { Tabs } from "antd"
import type { TabsProps } from "antd"
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Info from "./info"

const Description = dynamic(() => import('./description'), { ssr: false });

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Subscriptions Info",
    children: <Info />,
  },
  {
    key: "2",
    label: "Description",
    children: <Description />,
  }
]

export default function Create() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="border-y py-5 pl-[23px] text-[24px] font-bold leading-[28.8px]">Subscriptions</div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}
