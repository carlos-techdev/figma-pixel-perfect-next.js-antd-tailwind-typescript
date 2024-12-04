import { Button, Segmented } from "antd"
import MyIcon from "components/icon"

export default function Pricing() {
  return (
    <div>
      <div className="mx-auto max-w-3xl border-t px-2 py-[52px] text-center md:px-0">
        <p className="text-[48px] font-semibold leading-[60px]">Scalable plans for any team size</p>
        <p className="mt-6 text-[18px] leading-7 text-[#4b5563]">
          Unlock the power of scalability with our plans tailored to accommodate teams of any size, providing the
          flexibility you need to grow and succeed
        </p>
        <Segmented
          className="mt-8 rounded-[24px] px-4"
          defaultValue="monthly"
          options={[
            {
              label: <div className="rounded-2xl px-[14px] py-2">Monthly</div>,
              value: "monthly",
            },
            {
              label: <div className="px-[14px] py-2">Annually</div>,
              value: "annually",
            },
          ]}
        />
      </div>
      <div className="grid gap-8 pl-[46px] pr-[58px] md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[24px] border p-8">
          <p className="text-2xl font-semibold">Starter</p>
          <p className="pt-2 text-base text-[#4b5563] ">Essential features made affordable</p>
          <div className="flex items-baseline py-8">
            <p className="text-[48px] font-semibold leading-[60px]">$25</p>
            <p className="pl-1.5 text-base text-[#4b5563]">/month</p>
          </div>
          <div className="space-y-4 text-base text-[#4b5563]">
            <p>100 Scraping Credit</p>
            <p>5 Enrichment Credit</p>
            <div className="flex items-center space-x-2">
              <MyIcon type="tick" className="stroke-[#0072de]" />
              <p>Dataset</p>
            </div>
            <div className="flex items-center space-x-3">
              <MyIcon type="tick" className="stroke-[#0072de]" />
              <p>Access to core features</p>
            </div>
            <Button className="h-11 w-full text-base font-medium text-[#374151]">Choose Plan</Button>
          </div>
        </div>
        <div className="rounded-[24px] border p-8">
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-semibold">Growth</p>
            <p className="font-sembold rounded-md border bg-[#f0f8ff] px-2.5 py-0.5 text-sm text-[#005aad]">
              Most popular
            </p>
          </div>
          <p className="pt-2 text-base text-[#4b5563] ">Essential features made affordable</p>
          <div className="flex items-baseline py-8">
            <p className="text-[48px] font-semibold leading-[60px]">$79</p>
            <p className="pl-1.5 text-base text-[#4b5563]">/month</p>
          </div>
          <div className="space-y-4 text-base text-[#4b5563]">
            <p>15000 Scraping Credit</p>
            <p>20 Enrichment Credit</p>
            <div className="flex items-center space-x-2">
              <MyIcon type="tick" className="stroke-black" />
              <p>Limited customer support</p>
            </div>
            <div className="flex items-center space-x-3">
              <MyIcon type="tick" className="stroke-black" />
              <p>Access to core features</p>
            </div>
            <Button className="h-11 w-full bg-black text-base font-medium text-white">Your Plan</Button>
          </div>
        </div>
        <div className="rounded-[24px] border p-8">
          <p className="text-2xl font-semibold">Ultimate</p>
          <p className="pt-2 text-base text-[#4b5563] ">Tailored analytics for large enterprises</p>
          <div className="flex items-baseline py-8">
            <p className="text-[48px] font-semibold leading-[60px]">$199</p>
            <p className="pl-1.5 text-base text-[#4b5563]">/month</p>
          </div>
          <div className="space-y-4 text-base text-[#4b5563]">
            <p>100 Scraping Credit</p>
            <p>5 Enrichment Credit</p>
            <div className="flex items-center space-x-2">
              <MyIcon type="tick" className="stroke-[#0072de]" />
              <p>Dataset</p>
            </div>
            <div className="flex items-center space-x-3">
              <MyIcon type="tick" className="stroke-[#0072de]" />
              <p>Access to core features</p>
            </div>
            <Button className="h-11 w-full text-base font-medium text-[#374151]">Choose Plan</Button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[25px] w-[223px] text-center text-[14px]">
        Prices do not include applicable tax Downgrade to Free Plan
      </div>
      <div className="pl-[43px] pr-[38px]">
        <p className="text-[48px] font-semibold leading-[60px]">Credits Add-on</p>
        <div className="mt-[26px] gap-8 rounded-[32px] border pl-8 pr-3 lg:flex">
          <div className="my-[39px] w-full border-b lg:w-2/3">
            <p className="text-[30px] font-semibold leading-[38px]">Enrichment Credits</p>
            <div className="mt-4 text-[16px] leading-7 text-[#4b5563]">
              <p>
                Enrichment credits grant access to millions of people and company databases based on 200+ data
                attributes.
              </p>
              <p>We charge 1 credit per person/company for verified details.</p>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-black p-8 text-center lg:w-1/3">
            <p className="text-[16px] font-semibold leading-8 text-[#4b5563]">Starts at</p>
            <div className="mt-4 flex items-baseline justify-center">
              <p className="text-[48px] font-semibold leading-[60px]">$0.025</p>
              <p className="pl-1.5 text-base text-[#4b5563]">/per credit</p>
            </div>
            <Button className="mt-8 h-11 w-full bg-black text-base font-semibold text-white">Get started</Button>
          </div>
        </div>
        <div className="mt-[26px] gap-8 rounded-[32px] border pl-8 pr-3 lg:flex">
          <div className="my-[11px] w-full border-b lg:w-2/3">
            <p className="text-[30px] font-semibold leading-[38px]">Scraping Credits</p>
            <div className="left-7 mt-4 text-[16px] text-[#4b5563]">
              <p>
                Our scraping credits offer an advanced solution for gathering data from web public data and social
                networks search engine results pages. You can easily access information from personal profiles, company
                profiles, people, and company search result pages.
              </p>
              <p>We charge 1 credit per person/company for verified details.</p>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-black p-8 text-center lg:w-1/3">
            <p className="text-[16px] font-semibold leading-8 text-[#4b5563]">Starts at</p>
            <div className="mt-4 flex items-baseline justify-center">
              <p className="text-[48px] font-semibold leading-[60px]">$0.025</p>
              <p className="pl-1.5 text-base text-[#4b5563]">/per credit</p>
            </div>
            <Button className="mt-8 h-11 w-full bg-black text-base font-semibold text-white">Get started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
