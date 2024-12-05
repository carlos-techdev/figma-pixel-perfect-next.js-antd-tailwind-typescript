import { Button, DatePicker, Input, Select } from "antd"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const dateFormat = 'DD/MM/YYYY';

const credits_options = [
  {
    value: "1",
    label: "Enrichment Credits",
  },
  {
    value: "2",
    label: "Scraping Credits",
  },
]

const day_options = [
  {
    value: "1",
    label: "Monthly",
  },
  {
    value: "2",
    label: "Yearly",
  },
  {
    value: "3",
    label: "One Time",
  },
]

export default function Credit() {
  return (
    <div className="flex px-11">
      <div className="w-1/3 text-[16px] font-bold leading-[19.2px]">Credit Add on</div>
      <div className="w-2/3 pt-4 text-base">
        <div className="grid py-6 sm:grid-cols-2">
          <p className="text-[#666d80]">Product name</p>
          <div className="mt-2 sm:mt-0">
            <Select defaultValue="1" className="w-full h-12" options={credits_options} />
          </div>
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <p className="text-[#666d80]">Amount</p>
          <div className="mt-2 sm:mt-0">
            <Input className="h-12" type="text" defaultValue="25,000" />
          </div>
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <p className="text-[#666d80]">Frequently</p>
          <div className="mt-2 sm:mt-0">
            <Select defaultValue="1" className="w-full h-12" options={day_options} />
          </div>
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <p className="text-[#666d80]">Expiry Date</p>
          <div className="mt-2 sm:mt-0">
          <DatePicker
            className="w-full h-12"
            value={dayjs('2019-12-16')}
            format={dateFormat}
          />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-2 pt-[27px]">
          <Button className="w-[108px] h-10 text-[12px] leading-[18px] font-semibold text-white bg-black">Insert Add-on</Button>
          <Button className="w-[98px] h-10 text-[12px] leading-[18px] font-semibold text-black">Cancel</Button>

        </div>
      </div>
    </div>
  )
}
