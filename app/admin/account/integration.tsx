import { Button } from "antd"
import MyIcon from "components/icon"

export default function Integration() {
  return (
    <div>
      <div className="space-y-2">
        <div className="flex space-x-1">
          <MyIcon type="connect" />
          <p className="text-[20px] font-semibold leading-[27px]">Connect Your Mailbox</p>
        </div>
        <p className="pl-[34px] text-[14px] leading-[21px] text-[#8e8e8e]">
          Enhance your outbound effors and get ahead of the game by optimizing your mailbox with unbeatable features
          conversations, meetings, and other productivity-boosting feature
        </p>
      </div>
      <div className="grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <MyIcon type="google" />
            <p className="text-[14px] font-semibold leading-[18px]">Google</p>
          </div>
          <Button className="h-[38px] w-[92px] rounded-lg border-black text-[14px] font-semibold leading-[18px]">
            Connect
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <MyIcon type="outlook" />
            <p className="text-[14px] font-semibold leading-[18px]">Outlook</p>
          </div>
          <Button className="h-[38px] w-[92px] rounded-lg border-black text-[14px] font-semibold leading-[18px]">
            Connect
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2 border-b pb-[14px]">
        <MyIcon type="connected_mail" />
        <p className="text-[18px] font-bold leading-6">Connected Mailbox</p>
      </div>
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center space-x-2">
          <MyIcon type="google" />
          <p className="text-base font-semibold">cansf@gmail.com</p>
        </div>
        <p className="text-base font-semibold text-[#51a13b]">Connected</p>
      </div>
      <div className="border-b pb-4 pt-10 text-[20px] font-semibold leading-[27px]">Integrations</div>
      <div className="mt-[23px] grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="space-y-5 rounded-[10px] border p-6">
          <div>
            <MyIcon type="hubspot" />
          </div>
          <div>
            <p className="text-[18px] font-semibold leading-[25px]">Hubspot</p>
            <p className="mt-2 text-[14px] leading-[21px] text-[#666d80]">
              Interdum dfrfrffre diam veneitak vitae reo et at ut.
            </p>
          </div>
          <Button className="w-full text-[12px] font-semibold leading-[18px] text-[#0d0d12]">Coming Soon</Button>
        </div>
        <div className="space-y-5 rounded-[10px] border p-6">
          <div>
            <MyIcon type="salesforce" />
          </div>
          <div>
            <p className="text-[18px] font-semibold leading-[25px]">Salesforce</p>
            <p className="mt-2 text-[14px] leading-[21px] text-[#666d80]">
              Interdum dfrfrffre diam veneitak vitae reo et at ut.
            </p>
          </div>
          <Button className="w-full text-[12px] font-semibold leading-[18px] text-[#0d0d12]">Coming Soon</Button>
        </div>
        <div className="space-y-5 rounded-[10px] border p-6">
          <div>
            <MyIcon type="zapier" />
          </div>
          <div>
            <p className="text-[18px] font-semibold leading-[25px]">Zapier</p>
            <p className="mt-2 text-[14px] leading-[21px] text-[#666d80]">
              Interdum dfrfrffre diam veneitak vitae reo et at ut.
            </p>
          </div>
          <Button className="w-full text-[12px] font-semibold leading-[18px] text-[#0d0d12]">Coming Soon</Button>
        </div>
      </div>
    </div>
  )
}
