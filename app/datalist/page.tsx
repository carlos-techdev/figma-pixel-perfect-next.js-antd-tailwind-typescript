"use client"

import { Input } from "antd"
import type { TableColumnsType } from "antd"
import { useRouter } from "next/navigation"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  name: string
  date: string
  contacts: string
  source: string
  location: string
  keyword: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Data Tesla List",
    date: "22/01/2024",
    contacts: "500",
    source: "People",
    location: "Austin, USA",
    keyword: "Tesla",
    action: "",
  },
  {
    key: "2",
    name: "Data Tesla List",
    date: "22/01/2024",
    contacts: "500",
    source: "People",
    location: "Austin, USA",
    keyword: "Tesla",
    action: "",
  },
  {
    key: "3",
    name: "Data Tesla List",
    date: "22/01/2024",
    contacts: "500",
    source: "Scraper",
    location: "Austin, USA",
    keyword: "Tesla",
    action: "",
  },
  {
    key: "4",
    name: "Data Tesla List",
    date: "22/01/2024",
    contacts: "500",
    source: "Companies",
    location: "Austin, USA",
    keyword: "Tesla",
    action: "",
  },
  {
    key: "5",
    name: "Data Tesla List",
    date: "22/01/2024",
    contacts: "500",
    source: "People",
    location: "Austin, USA",
    keyword: "Tesla",
    action: "",
  },
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
}

export default function Datalist() {
  const router = useRouter()

  const viewList = () => {
    router.push("/datalist/view")
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "List Name",
      dataIndex: "name",
      key: "name",
      render: (source) => <p className="text-[14px] leading-[21px]">{source}</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (source) => <p className="text-[14px] font-medium leading-[21px]">{source}</p>,
    },

    {
      title: "Contacts",
      dataIndex: "contacts",
      key: "contacts",
      render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      render: (source: any) => {
        let className
        switch (source) {
          case "People":
            className = "bg-[#f4edf7] text-[#954baf]"
            break
          case "Scraper":
            className = "bg-[#edf2fe] text-[#4976f4]"
            break
          case "Companies":
            className = "bg-[#f4edf7] text-[#d28e3d]"
            break
          default:
        }
        return (
          <span className={`${className} rounded-[4px] px-1.5 py-1 text-center text-[12px] font-medium leading-[17px]`}>
            {source}
          </span>
        )
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["lg"],
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="mappin" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "keyword",
      responsive: ["lg"],
      render: (source: any) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
    },
    {
      title: "Contact Info",
      key: "action",
      responsive: ["xl"],
      render: () => (
        <div className="flex items-center space-x-[11px]">
          <span className="cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2194_36549)">
                <path
                  d="M12.0322 19C12.4263 19.0007 12.8166 18.9234 13.1808 18.7728C13.545 18.6221 13.8758 18.4009 14.1542 18.122L18.0732 14.2L16.6592 12.79L13.0262 16.424L13.0002 0H11.0002L11.0262 16.408L7.40619 12.788L5.99219 14.2L9.91119 18.119C10.1893 18.3983 10.5198 18.6199 10.8838 18.7711C11.2478 18.9223 11.638 19.0001 12.0322 19Z"
                  fill="#282828"
                />
                <path
                  d="M22 16V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V16H0V21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V16H22Z"
                  fill="#282828"
                />
              </g>
              <defs>
                <clipPath id="clip0_2194_36549">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="cursor-pointer" onClick={viewList}>
            <MyIcon type="eye" />
          </span>
          <span className="cursor-pointer">
            <MyIcon type="trash_1" />
          </span>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="border-y py-5 pl-[22px] text-[24px] font-medium leading-[28.8px]">Data Lists</div>
      <div className="p-4">
        <div>
          <Input
            className="w-1/3"
            id="search_data"
            size="large"
            placeholder="Search"
            prefix={<MyIcon type="magnifying" />}
          />
        </div>
        <div className="mt-2">
          <MyTable
            columns={columns}
            dataSource={data}
            pagination={false}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
          />
        </div>
        <div className="mt-8 text-center">
          <MyPagination />
        </div>
      </div>
    </div>
  )
}
