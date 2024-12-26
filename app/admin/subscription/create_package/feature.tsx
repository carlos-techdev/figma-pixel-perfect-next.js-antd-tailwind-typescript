import { Input, Select } from "antd"
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

const team_options = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Deactive",
  },
]

export default function Feature() {
  return (
    <div className="pl-2 pr-7">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]  text-[#0d0d12]">Features</p>
          <p className="text-base text-[#666d80]">Update Feature details</p>
        </div>
        {btn_group}
      </div>
      <div className="text-base font-medium text-[#666d80]">
        <div className="grid border-b py-6 sm:grid-cols-2">
          <div>Show Package on Pricing Page</div>
          <Select className="h-12 w-full" defaultValue="1" options={status_options} />
        </div>
        <div className="space-y-6 border-b py-6">
          <div className="grid sm:grid-cols-2">
            <div>Team Member Features</div>
            <Select className="h-12 w-full" defaultValue="1" options={team_options} />
          </div>
          <div className="grid sm:grid-cols-2">
            <div>Team Members</div>
            <Input defaultValue="5" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
