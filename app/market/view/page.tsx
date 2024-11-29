"use client"

import { ArrowLeftOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Link from "next/link"
import MyIcon from "components/icon"

export default function ViewMarket() {
  return (
    <div className="px-4">
      <Link href="/market">
        <div className="mr-8 flex space-x-2 border-y py-4">
          <ArrowLeftOutlined />
          <p className="flex items-center text-2xl">Back</p>
        </div>
      </Link>
      <div className="border-b pb-4 pt-8">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-[13px]">
              <div className="flex items-center space-x-1">
                <MyIcon type="linkedin" width={48} height={48} />
              </div>
              <div className="space-y-2">
                <p className="text-[20px] font-medium leading-6">LinkedIn people profiles</p>
                <p className="text-base text-[#727272]">Public webdata</p>
              </div>
            </div>
            <div className="space-x-2">
              <Button>Talk to Sales</Button>
              <Button className="bg-black text-white">Purchase</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex border-b pb-12">
        <div className="w-full lg:w-2/3">
          <p className="text-base text-[#727272]">
            User our Linkedin profiles datasets (public data) to make informed business decisions, improve customer
            relations, and make strategic hiring or recruiting decisions. Depending on your needs, you may purchase the
            entire dataset or a customized subset.Popular use cases include: tracking talent movement, sourcing new
            talent, lead generation, and an alternative investment data source.
          </p>
          <div className="mt-10 flex items-center space-x-2 text-[#666d80]">
            <p className="text-[14px] leading-[21px]">Data fields:</p>
            <p className="rounded-[4px] bg-[#eeeff2] px-2 text-[12px] leading-[18px]">First name</p>
            <p className="rounded-[4px] bg-[#eeeff2] px-2 text-[12px] leading-[18px]">Last name</p>
            <p className="rounded-[4px] bg-[#eeeff2] px-2 text-[12px] leading-[18px]">Phone Number</p>
          </div>
        </div>
        <div className="ml-4 hidden w-0 space-y-4 border p-4 lg:block lg:w-1/3">
          <p className="text-[20px] font-medium leading-6">Database overview</p>
          <div className="text-[14px] leading-[21px]">
            <div className="flex justify-between py-3">
              <p className="font-medium">Data Fields</p>
              <p className="text-[#727272]">33</p>
            </div>
            <div className="flex justify-between py-3">
              <p className="font-medium">Records</p>
              <p className="text-[#727272]">529.3M</p>
            </div>
            <div className="flex justify-between py-3">
              <p className="font-medium">Source</p>
              <p className="text-[#727272]">https://linkedin.com</p>
            </div>
            <div className="flex justify-between py-3">
              <p className="font-medium">Starts at</p>
              <p className="text-[#727272]">$0.0025 per record</p>
            </div>
            <div className="flex justify-between py-3">
              <p className="font-medium">Min. Order</p>
              <p className="text-[#727272]">500$</p>
            </div>
          </div>

          <Button size="large" className="w-full text-base font-medium" icon={<MyIcon type="download" />}>
            Download Sample
          </Button>
        </div>
      </div>
      <div className="mt-12 text-[20px] font-medium leading-6">Related Database</div>
      <div className="mt-6 grid gap-4 space-y-4 sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 ">
        <div className="border p-4">
          <div className="flex items-center justify-between">
            <MyIcon type="facebook" width={48} height={48} />
            <Button className="bg-black text-white">View Database</Button>
          </div>
          <p className="mt-2 text-lg">Facebook Profile</p>
          <p className="mt-1 text-[#727272]">hello world</p>
        </div>
        <div className="border p-4">
          <div className="flex items-center justify-between">
            <MyIcon type="mail" />
            <Button className="bg-black text-white">View Database</Button>
          </div>
          <p className="mt-2 text-lg">Facebook Profile</p>
          <p className="mt-1 text-[#727272]">hello world</p>
        </div>
        <div className="border p-4">
          <div className="flex items-center justify-between">
            <MyIcon type="dropbox" />
            <Button className="bg-black text-white">View Database</Button>
          </div>
          <p className="mt-2 text-lg">Facebook Profile</p>
          <p className="mt-1 text-[#727272]">hello world</p>
        </div>
      </div>
    </div>
  )
}
