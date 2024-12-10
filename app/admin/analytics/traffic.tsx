import MyIcon from 'components/icon'

export default function Traffic() {
    return (
        <div className="w-[341px] border-[#eeeff1] border rounded-xl">
            <div className="p-6 py-4 space-y-1.5">
              <p className="text-[20px] leading-6 font-bold text-[#2e3138]">Traffic sources</p>
              <p className="text-sm text-[#454a54] font-semibold">Find the source of your visitor sources</p>
            </div>
            <div className="px-6 text-[#454a54] text-[14px] leading-[22px] font-normal space-y-1">
              <div className="flex justify-between py-2.5 bg-[#eeeff1]">
                <div className="pl-2.5 font-semibold">Source</div>
                <div className="pr-2.5 font-semibold">User</div>
              </div>
              <div className="pt-3 py-1 space-y-4">
              <div className="flex justify-between py-2.5">
                <div className="pl-2.5 flex items-center space-x-3">
                  <MyIcon type='google' />
                  <p>Google</p>
                </div>
                <div className="pr-2.5 font-semibold">7,874</div>
              </div>
              <div className="flex justify-between py-2.5">
                <div className="pl-2.5 flex items-center space-x-3">
                  <MyIcon type='direct' />
                  <p>Direct</p>
                </div>
                <div className="pr-2.5 font-semibold">4,902</div>
              </div>
              <div className="flex justify-between py-2.5">
                <div className="pl-2.5 flex items-center space-x-3">
                  <MyIcon type='twitter' />
                  <p>Twitter</p>
                </div>
                <div className="pr-2.5 font-semibold">3,787</div>
              </div>
              <div className="flex justify-between py-2.5">
                <div className="pl-2.5 flex items-center space-x-3">
                  <MyIcon type='facebook' width={20} height={20} />
                  <p>Facebook</p>
                </div>
                <div className="pr-2.5 font-semibold">3,395</div>
              </div>
              <div className="flex justify-between py-2.5">
                <div className="pl-2.5 flex items-center space-x-3">
                  <MyIcon type='linkedin' width={20} height={20} />
                  <p>Linkedin</p>
                </div>
                <div className="pr-2.5 font-semibold">2,794</div>
              </div>
              </div>
            </div>
          </div>
    )
}