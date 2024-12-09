import MyIcon from "components/icon"

export default function AnalyticsHeader() {
  return (
    <div className="mb-[22px] mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
      <div className="rounded-[4px] border border-[#e4e4e4] p-5">
        <div className="-ml-2 flex items-center space-x-1">
          <MyIcon type="impression" />
          <p className="text-base font-semibold text-[#454a54]">Impressions</p>
        </div>
        <div className="ml-0.5 flex items-center space-x-2">
          <div className="flex items-center space-x-1 font-semibold ">
            <MyIcon type="arrow" className="stroke-[#15994e]" />
            <p className="text-[13px] leading-[20px] text-[#15994e]">16%</p>
          </div>
          <div className="text-[13px] font-medium leading-[20px] text-[#454a54]">increase from last week</div>
        </div>
        <div className="pt-[25px] text-[28px] font-medium leading-[33.6px]">250.48k</div>
      </div>
      <div className="rounded-[4px] border border-[#e4e4e4] p-5">
        <div className="-ml-2 flex items-center space-x-1">
          <MyIcon type="engagement" />
          <p className="text-base font-semibold text-[#454a54]">Engagements</p>
        </div>
        <div className="ml-0.5 flex items-center space-x-2">
          <div className="flex items-center space-x-1 font-semibold ">
            <MyIcon type="arrow" className="rotate-90 stroke-[#dc3826]" />
            <p className="text-[13px] leading-[20px] text-[#dc3826]">24%</p>
          </div>
          <div className="text-[13px] font-medium leading-[20px] text-[#454a54]">decrease from last week</div>
        </div>
        <div className="pt-[25px] text-[28px] font-medium leading-[33.6px]">48.28k</div>
      </div>
      <div className="rounded-[4px] border border-[#e4e4e4] p-5">
        <div className="-ml-2 flex items-center space-x-1">
          <MyIcon type="impression" />
          <p className="text-base font-semibold text-[#454a54]">New users</p>
        </div>
        <div className="ml-0.5 flex items-center space-x-2">
          <div className="flex items-center space-x-1 font-semibold ">
            <MyIcon type="arrow" className="stroke-[#15994e]" />
            <p className="text-[13px] leading-[20px] text-[#15994e]">3%</p>
          </div>
          <div className="text-[13px] font-medium leading-[20px] text-[#454a54]">increase from last week</div>
        </div>
        <div className="pt-[25px] text-[28px] font-medium leading-[33.6px]">1,652</div>
      </div>
      <div className="rounded-[4px] border border-[#e4e4e4] p-5">
        <div className="-ml-2 flex items-center space-x-1">
          <MyIcon type="bounce" />
          <p className="text-base font-semibold text-[#454a54]">Bounce rate</p>
        </div>
        <div className="ml-0.5 flex items-center space-x-2">
          <div className="flex items-center space-x-1 font-semibold ">
            <MyIcon type="arrow" className="rotate-180 stroke-[#dc3826]" />
            <p className="text-[13px] leading-[20px] text-[#dc3826]">15%</p>
          </div>
          <div className="text-[13px] font-medium leading-[20px] text-[#454a54]">decrease from last week</div>
        </div>
        <div className="pt-[25px] text-[28px] font-medium leading-[33.6px]">38.58%</div>
      </div>
    </div>
  )
}
