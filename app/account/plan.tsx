import { Button } from "antd"
import type { TableColumnsType } from "antd"
import MyIcon from "components/icon"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  name: string
  date: string
  renew_time: string
  amount: string
  frequency: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Enrichment Credit",
    date: "Feb 5, 2023",
    renew_time: "March 5,2023",
    amount: "25,000",
    frequency: "Monthly",
    action: "",
  },
  {
    key: "2",
    name: "Enrichment Credit",
    date: "Feb 5, 2023",
    renew_time: "March 5,2023",
    amount: "25,000",
    frequency: "Monthly",
    action: "",
  },
  {
    key: "3",
    name: "Enrichment Credit",
    date: "Feb 5, 2023",
    renew_time: "March 5,2023",
    amount: "25,000",
    frequency: "Monthly",
    action: "",
  },
  {
    key: "4",
    name: "Enrichment Credit",
    date: "Feb 5, 2023",
    renew_time: "March 5,2023",
    amount: "25,000",
    frequency: "Monthly",
    action: "",
  },
]

const columns: TableColumnsType<DataType> = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Start Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Renew time",
    dataIndex: "renew_time",
    key: "renew_time",
    responsive: ["md"],
  },
  {
    title: "Credit Amount",
    dataIndex: "amount",
    key: "amount",
    responsive: ["lg"],
  },
  {
    title: "Frequency",
    dataIndex: "frequency",
    key: "frequency",
    responsive: ["lg"],
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    responsive: ["xl"],
    render: () => <p className="text-[12px] font-bold leading-[18px]">X</p>,
  },
]

export default function Plan() {
  return (
    <div>
      <div className="pb-[10px]">
        <p className="text-[20px] font-semibold leading-[27px]">Plan overview</p>
        <p className="text-base text-[#666d80]">Manage your billing and payment details</p>
      </div>
      <div className="rounded-xl border px-5">
        <div className="flex items-center justify-between border-b pb-3 pt-5">
          <p className="font-semibold">Starter Plan</p>
          <Button className="text-[12px] font-semibold leading-[18px]">Upgrade Plan</Button>
        </div>
        <div className="flex items-center justify-between border-b py-3">
          <div className="flex items-center space-x-2">
            <MyIcon type="scraping" />
            <p className="font-semibold">Scraping Credit</p>
          </div>
          <p className="text-[12px] font-semibold leading-[18px]">25,000/Month</p>
        </div>
        <div className="flex items-center justify-between border-b py-[15.5px]">
          <div className="flex items-center space-x-2">
            <MyIcon type="enrichment" />
            <p className="font-semibold">Enrichment Credit</p>
          </div>
          <p className="text-[12px] font-semibold leading-[18px]">25,000/Month</p>
        </div>
      </div>
      <div className="py-8">
        <p className="text-[20px] font-semibold leading-[27px]">Current Credit Usage</p>
        <p className="mt-4 text-sm font-semibold">People Enrichment</p>
        <p className="mt-2 text-sm text-gray-500">
          People Enrichment credits allow targeted access to individual profiles based on 200+ field attributes within
          the person dataset.
        </p>
        <p className="text-gray-500">We charge 1 credit per person for verified details</p>
        <p className="mt-4 text-[14px] font-semibold leading-6">Companies Enrichment</p>
        <div className="mt-4 flex flex-row-reverse items-center">
          <p>You reached 18,750 Credits from 25,000 Enrichment Credits</p>
          <div className="grow text-[13px] leading-5 text-gray-500">
            <p>
              Companies Enrichment credits provide targeted access to millions of companies database based on key
              firmographic attributes.
            </p>
            <p className="text-gray-500">We charge 1 credit per verified company data</p>
          </div>
        </div>
        <div className="mt-4 grid h-2 grid-cols-9 gap-2 rounded-md bg-gray-100">
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-[14px] font-semibold leading-6">Scarping Credits</div>
          <Button className="h-[26px] rounded-lg bg-black text-[12px] leading-[18px] text-white">Buy More</Button>
        </div>
        <div className="mt-7 flex flex-row-reverse items-center">
          <div className="text-sm">You reached 18,750 Credits from 25,000 Scraping Credits</div>
          <div className="grow text-[13px] leading-5 text-gray-500">
            <p>
              Our scraping credits offer an advanced solution for gathering data from Linkedin search results pages. You
              can easily access information from personal profiles, company profiles, people, and company search result
              pages.
            </p>
            <p>We charge 1 credit per result.</p>
          </div>
        </div>
        <div className="mt-4 grid h-2 grid-cols-9 gap-2 rounded-md bg-gray-100">
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
          <div className="h-2 rounded-md bg-black"></div>
        </div>
        <div className="mt-4 text-right">
          <Button className="h-[26px] rounded-lg bg-black text-[12px] leading-[18px] text-white">Buy More</Button>
        </div>
      </div>
      <div className="flex justify-between pb-8 pt-4">
        <p className="text-base font-semibold">Credits Add-On</p>
        <div className="w-2/3">
          <MyTable size="middle" columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  )
}
