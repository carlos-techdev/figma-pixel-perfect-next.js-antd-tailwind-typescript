import { Checkbox, Input } from "antd"
import CountrySelect from "components/CountrySelect"

export default function Info() {
  return (
    <>
      <p className="mt-8 text-lg font-bold">Billing Info</p>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-gray-600">Full name</div>
        <div className="mt-2 sm:mt-0">
          <Input type="text" defaultValue="Dann John" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-gray-600">Email Address</div>
        <div className="mt-2 sm:mt-0">
          <Input type="text" defaultValue="alesik@mail.com" />
        </div>
      </div>
      <div className="border-b">
        <div className="grid py-2 sm:grid-cols-2">
          <div className="text-gray-600">Country</div>
          <div className="mt-2 w-full sm:mt-0">
            <CountrySelect className="w-full" />
          </div>
        </div>
      </div>
      <div className="border-b py-2">
        <div className="flex items-center space-x-1">
          <Checkbox defaultChecked />
          <p className="text-xl font-bold">Company Info</p>
        </div>
        <p className="text-gray-600">Please check the box in case you need a company invoice</p>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-gray-600">Company Name</div>
        <div className="mt-2 sm:mt-0">
          <Input type="text" defaultValue="Paywolf LTD" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-gray-600">Company Registration Number</div>
        <div className="mt-2 sm:mt-0">
          <Input type="text" defaultValue="1244233347" />
        </div>
      </div>
      <div className="grid border-b py-4 sm:grid-cols-2">
        <div className="text-gray-600">Company Address</div>
        <div className="mt-2 sm:mt-0">
          <Input type="text" defaultValue="Street 123, New York" />
        </div>
      </div>
      <div className="border-b">
        <div className="grid py-2 sm:grid-cols-2">
          <div className="text-gray-600">Country</div>
          <div className="mt-2 w-full sm:mt-0">
            <CountrySelect className="w-full" />
          </div>
        </div>
      </div>
      <div className="grid pt-4 sm:grid-cols-2">
        <div className="text-gray-600">Company Website</div>
        <div className="mt-2 sm:mt-0">
          <Input type="text" defaultValue="www.paywolf.io" />
        </div>
      </div>
    </>
  )
}
