import { Checkbox } from "antd"
import { useState } from "react"
import MyIcon from "components/icon"

export default function View() {
  const [find, setFind] = useState(false)

  return (
    <div>
      <div className="space-y-4 pl-[26px] pr-2 pt-4">
        <div className="flex items-center space-x-4">
          <MyIcon type="facebook" width={57} height={59} />
          <div>
            <p className="text-base font-extrabold">Facebook INC</p>
            <div className="flex items-center pl-[3px]">
              <MyIcon type="black_linkedin" />
              <span className="ml-1.5">
                <MyIcon type="chain" />
              </span>
              <p className="ml-3.5 text-[14px] leading-5 text-[#495d8e]">Software Development</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#f8ffa4] to-white pb-2.5 pl-[13px] pr-3 pt-4">
          <div className="flex items-end justify-between">
            <div className="flex items-center space-x-[11px]">
              <MyIcon type="three_users" />
              <div>
                <p className="text-[14px] font-medium leading-5">Company Size</p>
                <p className="text-[12px] leading-[18px] text-[#4b5563]">15 employees</p>
              </div>
            </div>
            <p className="text-[14px] leading-5 text-[#0042e4] cursor-pointer" onClick={() => setFind(true)}>
              Find Leads
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#f8ffa4]  to-white pb-2.5 pl-[13px] pr-3 pt-4">
          <div className="flex items-center space-x-[11px]">
            <MyIcon type="special" />
            <div>
              <p className="text-[14px] font-medium leading-5">Specialities</p>
              <p className="text-[10px] leading-[18px] text-[#4b5563]">
                No Code Dvelopemnt, Services, Information, Social Media
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#f8ffa4] to-white pb-2.5 pl-[13px] pr-3 pt-4">
          <div className="flex items-center space-x-[11px]">
            <MyIcon type="location" />
            <div>
              <p className="text-[14px] font-medium leading-5">Location</p>
              <p className="text-[12px] leading-[18px] text-[#4b5563]">New York, United States</p>
            </div>
          </div>
        </div>
      </div>
      {find ? (
        <div>
          <div className="mx-[43px] mt-[25px] flex justify-between border-b border-black pb-2">
            <p className="text-[14px] font-extrabold leading-[21.27px]">Employees</p>
            <p className="text-[14px] leading-5 px-1 hover:bg-gray-200 hover:rounded cursor-pointer">Select All</p>
          </div>
          <div className="mt-7 pl-11">
            <div className="flex items-center justify-between rounded-[12px] border-[1.25px] border-[#e0daed] h-12 bg-gradient-to-r from-[#f8ffa4] to-white py-[15.5px] pl-4 pr-3">
              <p className="text-[14px] font-semibold leading-[17px] text-[#0b0b0b]">Save to list</p>
              <MyIcon type="arrow" className="stroke-black" />
            </div>
          </div>
          <div className="mt-[19px]">
            <div className="flex justify-between px-[31px] py-3 pr-3">
              <div className="flex items-center space-x-3">
                <Checkbox></Checkbox>
                <div className="space-y-0.5">
                  <p className="text-[14px] font-extrabold leading-5">John</p>
                  <p className="text-[14px] leading-5 text-[#495d8e]">Full stack developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MyIcon type="black_linkedin" />
                <MyIcon type="user_plus" />
              </div>
            </div>
            <div className="flex justify-between px-[31px] py-3 pr-3">
              <div className="flex items-center space-x-3">
                <Checkbox></Checkbox>
                <div className="space-y-0.5">
                  <p className="text-[14px] font-extrabold leading-5">John</p>
                  <p className="text-[14px] leading-5 text-[#495d8e]">Full stack developer</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MyIcon type="black_linkedin" />
                <MyIcon type="user_plus" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  )
}
