import { Radio, Space } from "antd"
import Info from "../info"
import Payment from "../payment"

export default function Plan() {
  return (
    <div>
      <div className="border-y p-4 text-2xl font-semibold">Plan Builder</div>
      <div className="p-4 pb-20 sm:flex sm:space-x-8">
        <div className="sm:w-2/3">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Credits Purchase</p>
            <div className="flex items-center justify-between rounded-s-md bg-yellow-50 py-4 pr-8">
              <div className="space-y-2">
                <p className="text-lg font-semibold">Enrichment Credits</p>
                <p>Cost Per Credit $0.25</p>
              </div>
              <div className="rounded-xl border border-gray-300 px-4 py-2 text-lg">50,000</div>
            </div>
            <div className="flex items-center justify-between rounded-s-md bg-yellow-50 py-4 pr-8">
              <div className="space-y-2">
                <p className="text-lg font-semibold">Scraping Credits</p>
                <p>Cost Per Credit $0.65</p>
              </div>
              <div className="rounded-xl border border-gray-300 px-8 py-2 text-lg">25</div>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-8">
            <p className="">Frequency</p>
            <Radio.Group defaultValue={1}>
              <Space size={4} direction="horizontal">
                <Radio value={1}>Monthly</Radio>
                <Radio value={2}>Annually</Radio>
              </Space>
            </Radio.Group>
          </div>
          <Info />
        </div>
        <div className="sm:w-1/3">
          <p className="text-xl font-semibold">Order</p>
          <div className="mt-4 space-y-2 border-b pb-1">
            <p className="text-xl font-semibold">Credits Purchase</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Enrichment Credits</p>
              <p className="text-[16px] font-bold leading-[19px]">x</p>
            </div>
            <div className="flex justify-between">
              <p>Credit Amounts</p>
              <p>50,000</p>
            </div>
            <div className="flex justify-between">
              <p>Cost Per Credit</p>
              <p>$0.25</p>
            </div>
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>$12,500</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Scraping Credits</p>
              <p className="text-[16px] font-bold leading-[19px]">x</p>
            </div>
            <div className="flex justify-between">
              <p>Credit Amounts</p>
              <p>50,000</p>
            </div>
            <div className="flex justify-between">
              <p>Cost Per Credit</p>
              <p>$0.25</p>
            </div>
            <div className="flex justify-between border-b">
              <p>Sub Total</p>
              <p>$12,500</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p className="text-2xl font-semibold">Total</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold">$1,520/</p>
                <p className="text-md">Monthly</p>
              </div>
            </div>
            <Payment />
          </div>
        </div>
      </div>
    </div>
  )
}
