import { UserOutlined } from "@ant-design/icons"
import { Avatar, Dropdown } from "antd"
import { useRouter } from "next/navigation"
import { useState } from "react"
import MyIcon from "components/icon"
import SearchInput from "./common/SearchInput"

function DropDownMenu(changeLocation: (str: string) => void) {
  return (
    <div className="flex w-[320px] cursor-pointer flex-col justify-between border border-solid border-gray-200 bg-white p-[16px]">
      <div onClick={() => changeLocation("/account")} className="flex items-center gap-3 px-[12px] py-[15px]">
        <div className="flex items-end">
          <Avatar size={40} icon={<UserOutlined />} />
          <div className="z-10 -ml-3 -mt-3 size-2.5 rounded-full border-[1.5px] border-white bg-[#22c55e]"></div>
        </div>
        <div className="flex h-[44px] flex-col justify-between">
          <div className="text-[16px] font-bold leading-[22px] tracking-[-0.69%]">Brian Fox</div>
          <div className="text-[14px] font-medium leading-[20px] tracking-[-0.69%]">brian.fox@gmail.com</div>
        </div>
      </div>
      <div className="w-full border-t border-solid border-gray-200"></div>
      <div className="flex  h-[84px] flex-col justify-between">
        <div
          onClick={() => changeLocation("/account")}
          className="flex items-center gap-3 p-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]"
        >
          <span>
            <MyIcon type="profile" />
          </span>{" "}
          View Profile
        </div>
        <div
          onClick={() => changeLocation("/account")}
          className="flex items-center gap-3 p-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]"
        >
          <span>
            <MyIcon type="setting" />
          </span>{" "}
          Settings
        </div>
      </div>
      <div className="w-full border-t border-solid border-gray-200"></div>
      <div className="flex  h-[84px] flex-col justify-between">
        <div
          onClick={() => changeLocation("/pricing")}
          className="flex items-center gap-3 p-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]"
        >
          <span>
            <MyIcon type="subscription" />
          </span>{" "}
          Subscription
        </div>
        <div
          onClick={() => changeLocation("/pricing")}
          className="flex items-center gap-3 p-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]"
        >
          <span>
            <MyIcon type="clock" />
          </span>{" "}
          View Credit Usage
        </div>
      </div>
      <div className="w-full border-t border-solid border-gray-200"></div>
      <div className="flex  h-[84px] flex-col justify-between">
        <div
          onClick={() => changeLocation("/pricing/extension")}
          className="flex items-center gap-3 p-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]"
        >
          <span>
            <MyIcon type="circle_three_plus" />
          </span>{" "}
          Extensions
        </div>
        <div className="flex items-center gap-3 p-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]">
          <span>
            <MyIcon type="headphone" />
          </span>{" "}
          Help Center
        </div>
      </div>
      {/* {/ bar /} */}
      <div className="w-full border-t border-solid border-gray-200"></div>
      <div className="flex h-[40px] justify-between" onClick={() => changeLocation("/auth/login")}>
        <div className="flex items-center gap-3 px-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]">
          <span>
            <MyIcon type="signout" />
          </span>{" "}
          Sign Out
        </div>
        <div className="flex items-center gap-3 px-[10px] text-[16px] font-semibold leading-[22px] tracking-[-0.69%] text-[#475569]">
          {" "}
          ⌘ + F
        </div>
      </div>
    </div>
  )
}
export default function Header() {
  const router = useRouter()
  const [profileMenu, setProfileMenu] = useState(false)
  const changeLocation = (str: string) => {
    setProfileMenu(false)
    router.push(str)
  }
  return (
    <div className="w-full md:flex md:flex-col">
      <div className="mr-8 flex items-center justify-between p-4 pl-8">
        <div className="w-1/3">
          <SearchInput />
        </div>
        <div className="flex items-center space-x-4 md:space-x-10">
          <div className="flex items-center space-x-1">
            <MyIcon type="notification" />
            <span className="text-sm font-medium text-gray-700">Notifications</span>
          </div>
          <Dropdown
            dropdownRender={() => DropDownMenu(changeLocation)}
            placement="bottomRight"
            trigger={["click"]}
            open={profileMenu}
          >
            <div className="flex cursor-pointer items-center space-x-2" onClick={() => setProfileMenu(true)}>
              <Avatar size={32} icon={<UserOutlined />} />
              <span className="text-sm font-medium text-black">Brian F.</span>
              <MyIcon type="caret" className="rotate-0" />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
