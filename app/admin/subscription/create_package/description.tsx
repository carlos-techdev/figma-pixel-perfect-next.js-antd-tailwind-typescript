import { Input } from "antd"
import ReactQuill from "react-quill"
import { btn_group } from "components/button"
import { QuillHeaderOne } from "components/quill_header"
import MyTag from "components/tag"

const modules = {
  toolbar: {
    container: "#toolbar",
  },
}

const modules_1 = {
  toolbar: {
    container: "#toolbar_1",
  },
}

export default function Description() {
  return (
    <div className="pl-2 pr-7">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-[27px]  text-[#0d0d12]">Description</p>
          <p className="text-base text-[#666d80]">Update dataset details</p>
        </div>
        {btn_group}
      </div>
      <div className="grid border-b pb-7 pt-[31px] sm:grid-cols-2">
        <div className="text-base font-medium text-[#666d80] ">Subscriptions tagline</div>
        <Input defaultValue="Advanced Webdata" className="h-12" />
      </div>
      <p className="mt-7 text-base font-medium text-[#666d80]">Description Monthly Plan</p>
      <div className="mt-[34px] rounded border pb-4">
        <div className="px-6">
          <ReactQuill
            theme="snow"
            defaultValue="fefe"
            modules={modules}
            className="h-[200px] overflow-y-auto rounded border-0 p-2"
          />
          <div className="px-2">
            <QuillHeaderOne />
          </div>
          <div className="mt-20 px-2">
            <MyTag />
          </div>
        </div>
      </div>
      <p className="mt-[19px] text-base font-medium text-[#666d80]">Description Annual Plan</p>
      <div className="mt-[34px] rounded border pb-4">
        <div className="px-6">
          <ReactQuill
            theme="snow"
            defaultValue="frefefre"
            modules={modules_1}
            className="h-[200px] overflow-y-auto rounded border-0 p-2"
          />
          <div className="px-2">
            <QuillHeaderOne />
          </div>
          <div className="mt-20 px-2">
            <MyTag />
          </div>
        </div>
      </div>
    </div>
  )
}
