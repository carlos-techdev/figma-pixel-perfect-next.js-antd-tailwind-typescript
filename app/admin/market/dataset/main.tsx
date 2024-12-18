import { Avatar, Button } from "antd"
import MyIcon from "components/icon"
import MyInput from "components/input"

export default function MarketMain() {
  return (
    <div>
      <div className="flex flex-row-reverse">
        <Button icon={<MyIcon type="sort" />} size="large" className="text-[14px] font-medium leading-[21px]">
          Sort By
        </Button>
        <div className="mr-2 w-2/5">
          <MyInput />
        </div>
      </div>
      <div className="mt-4">
        <div className="ml-[35px] flex items-center justify-between border-b py-2">
          <div className="flex items-center">
            <Avatar icon={<MyIcon type="linkedin" width={40} height={40} />} />
            <p className="ml-3 text-base font-semibold text-[#252631]">Linkedin Profiles</p>
            <div className="ml-1.5 rounded-[99px] bg-[#f2f3f6] px-4 py-1 text-[14px] leading-[21px] text-[#778ca2]">
              Linkedin.com
            </div>
          </div>
          <div className="space-y-0.5">
            <p className="text-[14px] font-medium leading-[21px]">55M</p>
            <p className="text-[12px] leading-[18px] text-[#778ca2]">Records</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[14px] font-medium leading-[21px]">35</p>
            <p className="text-[12px] leading-[18px] text-[#778ca2]">Fields</p>
          </div>
          {/* <Link href="/admin/market/view"> */}
          <div className="hidden cursor-pointer space-x-1 lg:flex lg:items-center">
            <MyIcon type="special_1" />
            <p className="text-[12px] font-bold leading-[16.8px]">View Dataset</p>
          </div>
          {/* </Link> */}
        </div>
        <div className="ml-[35px] flex items-center justify-between border-b py-2">
          <div className="flex items-center">
            <Avatar icon={<MyIcon type="linkedin" width={40} height={40} />} />
            <p className="ml-3 text-base font-semibold text-[#252631]">Linkedin Profiles</p>
            <div className="ml-1.5 rounded-[99px] bg-[#f2f3f6] px-4 py-1 text-[14px] leading-[21px] text-[#778ca2]">
              Linkedin.com
            </div>
          </div>
          <div className="space-y-0.5">
            <p className="text-[14px] font-medium leading-[21px]">55M</p>
            <p className="text-[12px] leading-[18px] text-[#778ca2]">Records</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[14px] font-medium leading-[21px]">35</p>
            <p className="text-[12px] leading-[18px] text-[#778ca2]">Fields</p>
          </div>
          {/* <Link href="/admin/market/view"> */}
          <div className="hidden cursor-pointer space-x-1 lg:flex lg:items-center">
            <MyIcon type="special_1" />
            <p className="text-[12px] font-bold leading-[16.8px]">View Dataset</p>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}
