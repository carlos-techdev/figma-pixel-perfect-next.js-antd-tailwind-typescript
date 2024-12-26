import { Checkbox, Input, Select } from "antd"
import { btn_group } from "components/button"

const status_options = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Deactive",
  },
]

export default function Info() {
  return (
    <div className="pl-2 pr-7">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]  text-[#0d0d12]">Subscriptions Info</p>
          <p className="text-base text-[#666d80]">Update Subscriptions details</p>
        </div>
        {btn_group}
      </div>
      <div className="text-base font-medium text-[#666d80]">
        <div className="border-b py-6">
          <div className="grid sm:grid-cols-2">
            <div>Package name</div>
            <Input defaultValue="Growth" className="h-12" />
          </div>
          <div className="mt-6 grid sm:grid-cols-2">
            <div>Type</div>
            <Input defaultValue="Subscriptions" className="h-12" />
          </div>
        </div>
        <div className="space-y-6 border-b py-6">
          <div>Monthly Plan</div>
          <div className="grid sm:grid-cols-2">
            <div>Monthly Price</div>
            <Input defaultValue="$79" className="h-12" />
          </div>
          <div className="grid sm:grid-cols-2">
            <div>Scraping Credit Amount</div>
            <Input defaultValue="150,000" className="h-12" />
          </div>
          <div className="grid sm:grid-cols-2">
            <div>Enrichment Credit Amount</div>
            <Input defaultValue="150,000" className="h-12" />
          </div>
        </div>
        <div className="space-y-6 border-b py-6">
          <div>Annual Plan</div>
          <div className="grid sm:grid-cols-2">
            <div>Annual Price</div>
            <Input defaultValue="$79" className="h-12" />
          </div>
          <div className="grid sm:grid-cols-2">
            <div>Scraping Credit Amount</div>
            <Input defaultValue="150,000" className="h-12" />
          </div>
          <div className="grid sm:grid-cols-2">
            <div>Enrichment Credit Amount</div>
            <Input defaultValue="150,000" className="h-12" />
          </div>
        </div>
        <div className="grid py-6 sm:grid-cols-2">
          <div>Status</div>
          <Select className="h-12 w-full" defaultValue="1" options={status_options} />
        </div>
        <div className="mt-[23px] flex items-center space-x-[15px]">
          <Checkbox />
          <p>Show Package on pricing package</p>
        </div>
      </div>
    </div>
  )
}
