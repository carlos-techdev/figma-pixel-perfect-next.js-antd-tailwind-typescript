import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Input, Select, Space, Switch, Upload } from "antd"
import { btn_group } from "components/button"
import CountrySelect from "components/CountrySelect"

const phone_options = [
  {
    value: "1",
    label: "+1",
  },
  {
    value: "2",
    label: "+2",
  },
]

const currency_options = [
  {
    value: "1",
    label: "USD - US Dollar",
  },
  {
    value: "2",
    label: "CAD Dollar",
  },
]

export default function User() {
  return (
    <div>
      <div className="flex justify-between border-b pb-2">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]">Personal Info</p>
          <p className="text-base text-[#666d80]">Update your personal details</p>
        </div>
        {btn_group}
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Your photo</div>
        <div className="mt-2 flex items-center space-x-4 sm:mt-0">
          <Avatar size={48} icon={<UserOutlined />} />
          <Upload>
            <Button className="h-10 w-20 text-[12px] font-semibold leading-[18px]">Choose</Button>
          </Upload>
          <p className="text-[14px] leading-[21px] text-[#808897]">JPG or PNG, 1MB max</p>
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Full name</div>
        <div className="mt-2 sm:mt-0">
          <Input className="h-12" type="text" defaultValue="Brian" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Email</div>
        <div className="mt-2 sm:mt-0">
          <Input className="h-12" type="text" defaultValue="alesik@mail.com" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Phone number</div>
        <div className="mt-2 w-full sm:mt-0">
          <Space.Compact className="flex">
            <Select className="h-12" defaultValue="1" options={phone_options} />
            <Input className="h-12" defaultValue="(684) 550-0012" />
          </Space.Compact>
        </div>
      </div>
      <div className="border-b">
        <div className="grid py-3 sm:grid-cols-2">
          <div className="text-base font-medium text-[#666d80]">Country</div>
          <div className="mt-2 w-full sm:mt-0">
            <CountrySelect className="h-12 w-full" />
          </div>
        </div>
        <div className="grid pb-6 sm:grid-cols-2">
          <div className="text-base font-medium text-[#666d80]">Default currency</div>
          <div className="mt-2 w-full sm:mt-0">
            <Select defaultValue="1" className="h-12 w-full" options={currency_options} />
          </div>
        </div>
      </div>
      <div className="flex space-x-20 border-b py-8">
        <div className="space-y-2">
          <p className="font-semibold">Notifications</p>
          <p className="text-gray-500">Manage your notifications</p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between space-x-20">
            <p>Payments</p>
            <div className="flex space-x-1">
              <Switch />
              <p className="text-gray-500">Off</p>
            </div>
          </div>
          <div className="flex justify-between space-x-20">
            <p>Team Activity</p>
            <div className="flex space-x-1">
              <Switch />
              <p className="text-gray-500">Off</p>
            </div>
          </div>
          <div className="flex justify-between space-x-20">
            <p>Announcements</p>
            <div className="flex space-x-1">
              <Switch defaultChecked />
              <p className="text-green-500">On</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
