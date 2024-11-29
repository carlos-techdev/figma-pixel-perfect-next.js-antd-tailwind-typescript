import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Checkbox, Modal, Popover } from "antd"
import type { TableColumnsType } from "antd"
import { useState } from "react"
import MyIcon from "components/icon"
import { MyTable } from "components/table"

interface DataType {
  key: React.Key
  name: string
  company: string
  phone: string
  source: string
  location: string
  type: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Robert Fox",
    company: "Paywolf Tech Solutions",
    phone: "(671) 555-0110",
    source: "People",
    location: "Austin, USA",
    type: "People",
    action: "",
  },
  {
    key: "2",
    name: "Google",
    company: "Google INC",
    phone: "(505) 555-0125",
    source: "Scraper",
    location: "Orange, USA",
    type: "Company",
    action: "",
  },
  {
    key: "3",
    name: "Albert Flores",
    company: "Abc INC",
    phone: "(704) 555-0127",
    source: "Scraper",
    location: "Tel Aviv, IL",
    type: "People",
    action: "",
  },
  {
    key: "4",
    name: "Floyd Miles",
    company: "ABC INC",
    phone: "(405) 555-0128",
    source: "Companies",
    location: "Tel Aviv, IL",
    type: "People",
    action: "",
  },
  {
    key: "5",
    name: "Arlene McCoy",
    company: "XYD INC",
    phone: "(219) 555-0114",
    source: "People",
    location: "Tel Aviv, IL",
    type: "People",
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

export default function Prospect() {
  const [isDeleteContact, setIsDeleteContact] = useState(false)

  const showDeleteModal = () => {
    setIsDeleteContact(true)
  }

  const handleDeleteContactOk = () => {
    setIsDeleteContact(false)
  }

  const handleDeleteContactCancel = () => {
    setIsDeleteContact(false)
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (source) => (
        <div className="flex items-center space-x-2">
          <Avatar size={24} icon={<UserOutlined />} />
          <p className="text-[14px] leading-[21px]">{source}</p>
        </div>
      ),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (source) => <p className="text-[14px] font-medium leading-[21px]">{source}</p>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ["sm"],
      render: (source) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="phone" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      responsive: ["md"],
      render: (source) => {
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
          <span className={`${className} rounded px-1.5 py-1 text-center text-[12px] font-medium leading-[16.8px]`}>
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
      render: (source) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="mappin" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      responsive: ["xl"],
      render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
    },
    {
      title: "",
      key: "action",
      responsive: ["xl"],
      render: () => (
        <div className="flex items-center space-x-4">
          <Button type="default" className="font-semibold">
            View Contact
          </Button>
          <Popover
            placement="topRight"
            content={
              <div className="w-60">
                <div className="flex flex-row-reverse pr-3 text-base font-medium">x</div>
                <div className="flex items-center space-x-2 border-b pb-4 pl-4">
                  <MyIcon type="download" />
                  <span className="text-base font-medium">Export to CSV</span>
                </div>
                <div className="flex items-center space-x-2 pt-3 pl-4 cursor-pointer" onClick={showDeleteModal}>
                  <MyIcon type="trash" />
                  <span className="text-base font-medium text-[#af4b4b]">Delete Contact</span>
                </div>
                <Modal
                  centered
                  width={1056}
                  open={isDeleteContact}
                  onOk={handleDeleteContactOk}
                  onCancel={handleDeleteContactCancel}
                  footer={null}
                  closable={false}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div className="text-[14px] font-semibold leading-5 text-[#1c1c1c]">WARNING</div>
                      <div className="space-x-4">
                        <Button
                          className="h-[26px] w-[102px] rounded-lg text-[12px] font-semibold leading-[18px] text-[#0d0d12]"
                          onClick={handleDeleteContactCancel}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="h-[26px] w-[102px] bg-[#ff4747] text-[12px] leading-[18px] text-white"
                          onClick={handleDeleteContactOk}
                        >
                          Delete Contact
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#e5ecf6] p-4 text-[#1c1c1c]">
                      <div className="flex items-center space-x-1">
                        <MyIcon type="warning" />
                        <span className="text-[14px] font-bold leading-5">
                          Are you sure you want to delete contact details?
                        </span>
                      </div>
                      <p className="text-[11px] leading-[18px] opacity-40">
                        {
                          "This action is irreversible and will permanently lose your data and access to services. If you are sure, Check the box and Click 'Delete Contact'. To Cancel, click 'Cancel'."
                        }
                      </p>
                    </div>
                    <div>
                      <Checkbox>
                        <span className="ml-1 text-[14px] leading-5 text-[#1c1c1c]">
                          I confirm that I want to delete the contact details
                        </span>
                      </Checkbox>
                    </div>
                  </div>
                </Modal>
              </div>
            }
          >
            <div className="cursor-pointer hover:rounded-full hover:bg-gray-200">
              <MyIcon type="three_dots" />
            </div>
          </Popover>
        </div>
      ),
    },
  ]

  return (
    <div>
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
  )
}
