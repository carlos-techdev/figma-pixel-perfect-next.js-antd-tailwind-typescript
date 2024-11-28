"use client"

import { CaretRightOutlined } from "@ant-design/icons"
import { Button, Collapse, Input, Modal, Segmented, Select, Tabs } from "antd"
import type { CollapseProps, TabsProps } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import TagInput from "components/common/TabInput"
import MyIcon from "components/icon"
import { Building } from "components/icons"
import FilterModal from "./modal"

export default function Filter() {
  const pathname = usePathname()
  const [segment, setSegment] = useState("")
  const [companyLink, setCompanyLink] = useState("")
  const [peopleLink, setPeopleLink] = useState("")

  useEffect(() => {
    if (pathname.includes("company")) {
      setSegment("company")
      if (pathname.includes("admin")) {
        setCompanyLink("/admin/database/company")
        setPeopleLink("/admin/database/people")
      } else {
        setCompanyLink("/company")
        setPeopleLink("/people")
      }
    } else {
      setSegment("people")
      if (pathname.includes("admin")) {
        setPeopleLink("/admin/database/people")
        setCompanyLink("/admin/database/company")
      } else {
        setPeopleLink("/people")
        setCompanyLink("/company")
      }
    }
  }, [pathname])

  const [open, setOpen] = useState(false)

  const showFilter = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const getItems: () => CollapseProps["items"] = () => [
    {
      key: "1",
      label: (
        <div className="flex items-center space-x-1">
          <Building />
          <span className="font-medium">Job Titles</span>
        </div>
      ),
      children: 12345,
    },
    {
      key: "2",
      label: (
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Building />
            <span className="font-medium">Company</span>
          </div>
          <div className="rounded-xl border px-4">x 2</div>
        </div>
      ),
      children: (
        <div className="flex items-center space-x-2">
          <TagInput initVals={["Google", "Amazon"]} />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center space-x-2">
          <MyIcon type="mappin" />
          <span className="font-medium">Location</span>
        </div>
      ),
      children: null,
    },
    {
      key: "4",
      label: (
        <div className="flex  items-center space-x-2">
          <MyIcon type="two_users" />
          <span className="font-medium">Employees</span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex items-center space-x-2">
          <Building />
          <span className="font-medium">Industry and keywords</span>
        </div>
      ),
    },
  ]

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Search",
      children: (
        <div>
          <Input
            id="search1"
            variant="borderless"
            size="middle"
            placeholder="Search"
            prefix={<MyIcon type="magnifying" />}
          />
          <div className="flex justify-between pt-2">
            <div className="flex space-x-2">
              <p className="font-semibold">Filters</p>
              <div className="rounded-xl border px-4">3 x</div>
            </div>
            <div
              className="hover: flex cursor-pointer space-x-2 hover:rounded hover:bg-gray-200 hover:px-1"
              onClick={showFilter}
            >
              <div className="flex items-center space-x-2">
                <p className="font-semibold">More Filters</p>
                <div>
                  <MyIcon type="caret" className="-rotate-90" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Collapse
              className="bg-white"
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              items={getItems()}
            />
          </div>
          <Select
            variant="borderless"
            className="w-full border-none shadow-none"
            defaultValue="records_limits"
            options={[
              { value: "records_limits", label: "Records Limits" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
          <Button className="mt-3 h-[38px] w-full bg-black text-center text-[14px] font-bold leading-[21px] text-[#eaff00]">
            Search
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      label: "Saved searches",
      children: "Content of Tab Pane 2",
    },
  ]

  const tabClearFilterBtn = () => {
    return (
      <div className="flex h-[46px] flex-col justify-end">
        <Button className="text-[11px] font-semibold leading-[120%] tracking-normal" size={"small"} type="text">
          Clear all
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="pl-[21px] pt-[18px]">
        <Segmented
          value={segment}
          className="rounded-[24px] px-4"
          options={[
            {
              label: (
                <Link href={peopleLink}>
                  <div className="rounded p-1">People</div>
                </Link>
              ),
              value: "people",
            },
            {
              label: (
                <Link href={companyLink}>
                  <div className="rounded p-1">Companies</div>
                </Link>
              ),
              value: "company",
            },
          ]}
        />
      </div>
      <div className="p-2">
        <div className="mt-[13px]">
          <Tabs defaultActiveKey="1" items={items} tabBarExtraContent={tabClearFilterBtn()} />
        </div>
      </div>
      <Modal open={open} centered width={1000} onOk={handleOk} onCancel={handleCancel} closable={false} footer={null}>
        <FilterModal handleCancel={handleCancel} />
      </Modal>
    </div>
  )
}
