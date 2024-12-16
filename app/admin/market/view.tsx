import { DatePicker, Input, Select } from "antd"
import MyDragger from "components/dragger"
import MyIcon from "components/icon"
import SearchSelect from "components/search_select"

export default function ViewOrder() {
  return (
    <div>
      <div className="space-y-2 border-b border-[#dfe1e6] pb-[26px] text-[#333333]">
        <div className="flex justify-between">
          <p className="text-base">Dataset name</p>
          <p className="text-[16px] leading-[19.2px]">Dataset name</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base">Records</p>
          <p className="text-[16px] leading-[19.2px]">500</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base">Cost Per Record</p>
          <p className="text-[16px] leading-[19.2px]">$0.0019</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base">Spent</p>
          <p className="text-[16px] leading-[19.2px]">$25</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base">Issued Date</p>
          <p className="text-[16px] leading-[19.2px]">22/03/2025</p>
        </div>
      </div>
      <div className="space-y-4 pt-[43px]">
        <div className="flex items-center pl-4 rounded border">
          <MyIcon type="waiting" />
          <Select className="h-12 w-full" variant="borderless" suffixIcon={null}  />
        </div>
        <SearchSelect />
        <Input className="h-12" disabled placeholder="User email" prefix={<MyIcon type="envelope" />} />
        <div className="flex items-center rounded border">
          <div className="pl-4">
            <MyIcon type="calendar_1" />
          </div>
          <DatePicker
            variant="borderless"
            suffixIcon={null}
            placeholder="Delivery Date"
            className="h-12 w-full"
          />
        </div>
      </div>
      <div className="pt-[26px] px-5">
      <MyDragger />
      </div>
    </div>
  )
}
