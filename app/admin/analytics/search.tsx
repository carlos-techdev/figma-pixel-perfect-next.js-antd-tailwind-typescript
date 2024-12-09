import { Select } from "antd"
import { SmoothLineChart } from "components/chart"

const options = [
  {
    value: "1",
    label: <p className="text-[13px] font-semibold leading-5 text-[#454a54]">Last 7 days</p>,
  },
  {
    value: "2",
    label: <p className="text-[13px] font-semibold leading-5 text-[#454a54]">Last 7 days</p>,
  },
]

export default function VisitSearch() {
  return (
    <div className="rounded-xl border border-[#eeeff1] pt-6">
      <div className="flex justify-between border-b px-6 pb-6">
        <div className="space-y-1.5">
          <p className="text-[20px] font-bold leading-6 text-[#2e3138]">Visitor by Search Engine</p>
          <p className="text-sm font-semibold text-[#454a54]">Analyze Your Organic Serach Engine Visitors</p>
        </div>
        <div>
          <Select defaultValue="1" className="h-10 w-[129px]" options={options} />
        </div>
      </div>
      <div className="flex h-[392px]">
        <div className="border-r border-[#e3e5e8]">
          <div className="pl-6 pr-[29px] pt-4">
            <div className="flex items-center space-x-[7px]">
              <div className="size-2.5 rounded-sm bg-[#5066f7]"></div>
              <div className="text-[14px] leading-[22px] text-[#454a54]">30 days</div>
            </div>
            <div className="text-[22px] font-bold leading-7 text-[#2e3138]">2.3k</div>
          </div>
          <div className="mx-auto my-7 w-[74px] border-t"></div>
          <div className="my-7 pl-6 pr-[37px] pt-4">
            <div className="flex items-center space-x-[7px]">
              <div className="size-2.5 rounded-sm bg-[#748ffb]"></div>
              <div className="text-[14px] leading-[22px] text-[#454a54]">7 days</div>
            </div>
            <div className="text-[22px] font-bold leading-7 text-[#2e3138]">845</div>
          </div>
          <div className="mx-auto w-[74px] border-t text-center"></div>
          <div className="my-7 pl-6 pr-[37px] pt-4">
            <div className="flex items-center space-x-[7px]">
              <div className="size-2.5 rounded-sm bg-[#c3d6fe]"></div>
              <div className="text-[14px] leading-[22px] text-[#454a54]">24 hours</div>
            </div>
            <div className="text-[22px] font-bold leading-7 text-[#2e3138]">78</div>
          </div>
        </div>
        <div className="grow">
          <SmoothLineChart />
        </div>
      </div>
    </div>
  )
}
