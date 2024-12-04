import { Input } from "antd"
import { btn_group } from "components/button"
import CountrySelect from "components/CountrySelect"

export default function Company() {
  return (
    <div>
      <div className="flex justify-between border-b pb-2">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]">Company Info</p>
          <p className="text-base text-[#666d80]">Update your company details</p>
        </div>
        {btn_group}
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Company name</div>
        <div className="mt-2 sm:mt-0">
          <Input className="h-12" type="text" defaultValue="Paywolf LTD" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Company Registration Number</div>
        <div className="mt-2 sm:mt-0">
          <Input className="h-12" type="text" defaultValue="1244335672" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Company Address</div>
        <div className="mt-2 sm:mt-0">
          <Input className="h-12" type="text" defaultValue="Street 123, New York" />
        </div>
      </div>
      <div className="border-b">
        <div className="grid py-2 sm:grid-cols-2">
          <div className="text-base font-medium text-[#666d80]">Country</div>
          <div className="mt-2 w-full sm:mt-0">
            <CountrySelect className="h-12 w-full" />
          </div>
        </div>
      </div>
      <div className="grid py-4 sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80]">Company Website</div>
        <div className="mt-2 sm:mt-0">
          <Input className="h-12" type="text" defaultValue="www.paywolf.io" />
        </div>
      </div>
    </div>
  )
}
