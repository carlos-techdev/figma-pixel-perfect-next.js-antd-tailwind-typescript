"use client"

import { Button, Input } from "antd"
import type { TableColumnsType } from "antd"
import Filter from "components/filter/filter"
import MyIcon from "components/icon"
import NoResult from "components/no_result"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"

export default function Company() {
  let locale = {
    emptyText: (
      <div className="py-[119px]">
        <div className="flex justify-center">
          <NoResult />
        </div>
        <div className="space-y-4 text-center">
          <p className="text-2xl font-bold text-black">No results found</p>
          <p className="text-gray-500">Sorry, no results match your search. Please try again with a differnt query</p>
          <div className="space-x-4">
            <Button className="text-center">Clear search</Button>
            <Button className="bg-black text-center text-white">Start a new search</Button>
          </div>
        </div>
      </div>
    ),
  }

  interface DataType {
    key: React.Key
    name: string
    employees: string
    industry: string
    social: string
    location: string
    action: string
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Employees",
      dataIndex: "employees",
      key: "employees",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
      responsive: ["sm"],
    },
    {
      title: "Social",
      dataIndex: "social",
      key: "social",
      responsive: ["lg"],
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["xl"],
    },
    {
      title: "Contact Info",
      key: "action",
      responsive: ["xl"],
    },
  ]

  return (
    <>
      <div className="mr-8 border-y p-2 text-2xl font-bold">Search</div>
      <div className="flex">
        <div className="lg:w-1/4">
          <Filter />
        </div>
        <div className="space-y-2 pr-2 pt-[18px] lg:w-3/4">
          <div className="flex justify-between">
            <div className="w-1/3">
              <Input
                id="search2"
                size="large"
                placeholder="Search"
                prefix={<MyIcon type="magnifying" />}
              />
            </div>
            <div className="flex space-x-2 pr-2">
              <div className="border-r">
                <Button className="mr-2 flex h-full items-center space-x-1 rounded-md">
                  <MyIcon type="circle_three_plus" />
                  <span>Actions</span>
                </Button>
              </div>
              <Button className="h-full rounded-md">Import</Button>
            </div>
          </div>
          <div className="pt-[11px]">
            <MyTable locale={locale} size="middle" bordered columns={columns} dataSource={[]} pagination={false} />
          </div>
          <div className="pt-10">
            <MyPagination />
          </div>
        </div>
      </div>
    </>
  )
}
