import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import MyIcon from "components/icon"

export default function View() {
  return (
    <div className="space-y-3 pl-4 pr-1 pt-0">
      <div className="flex items-center space-x-3">
        <Avatar icon={<UserOutlined />} />
        <div>
          <div className="flex items-center space-x-2">
            <p className="text-[14px] font-extrabold leading-[21px]">Robert Fox</p>
            <MyIcon type="black_linkedin" />
          </div>
          <p className="text-sm text-[#495d8e]">Full stack developer</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-100 to-white p-3 pr-0">
        <div className="border-b border-black font-extrabold">Contact Info</div>
        <div className="space-y-1">
          <p className="text-[12px] leading-[18px] text-[#495d8e]">Email</p>
          <p className="text-[14px] leading-[21px] text-[#04153f]">Robert.fox@google.com</p>
          <p className="text-[12px] leading-[18px] text-[#495d8e]">Phone Number</p>
          <p className="text-sm text-[#04153f]">1576837222</p>
        </div>
      </div>
      <Button className="flex h-12 w-full items-center space-x-4 rounded-[12px] border-[1.25px] border-[#e0daed] bg-gradient-to-r from-yellow-100 to-white">
        <span className="text-[14px] font-semibold leading-[17px] text-[#0b0b0b]">Save to list</span>
        <MyIcon type="arrow" className="stroke-black" />
      </Button>
      <div className="flex items-center">
        <p className="text-[14px] font-bold leading-[21px]">Current Company</p>
        <MyIcon type="caret" />
      </div>
      <div className="flex items-center space-x-1">
        <MyIcon type="google" width={57} height={59} />
        <div>
          <p className="text-base font-extrabold">Google INC</p>
          <div className="flex items-center">
            <MyIcon type="black_linkedin" />
            <span className="ml-1">
              <MyIcon type="chain" />
            </span>
            <p className="ml-2 text-sm text-[#495d8e]">Software Development</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-100 to-white py-1 pl-3 pr-0">
        <div className="flex items-center space-x-4">
          <MyIcon type="three_users" />
          <div>
            <p className="text-sm font-medium">Company Size</p>
            <p className="text-[12px] leading-[18px] text-[#4b5563]">15 employees</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-100 to-white py-1 pl-3 pr-0">
        <div className="flex items-center space-x-4">
          <MyIcon type="special" />
          <div>
            <p className="text-sm font-medium">Specialities</p>
            <p className="text-[12px] leading-[18px] text-[#4b5563]">
              No code development, services, Information, Social Meida
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-100 to-white py-1 pl-3 pr-0">
        <div className="flex items-center space-x-4">
          <MyIcon type="location" />
          <div>
            <p className="text-sm font-medium">Location</p>
            <p className="text-[12px] leading-[18px] text-[#4b5563]">New York, United States</p>
          </div>
        </div>
      </div>
    </div>
  )
}
