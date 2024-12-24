import { Input } from "antd"
import ReactQuill from "react-quill"
import { btn_group } from "components/button"
import { QuillHeader } from "components/quill_header"
import MyTag from "components/tag"

const modules = {
  toolbar: {
    container: "#toolbar",
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
        <div className="text-base font-medium text-[#666d80] ">Dataset tagline</div>
        <Input defaultValue="Public Webdata" className="h-12" />
      </div>
      <p className="text-base font-medium text-[#666d80]">Description</p>
      <div className="mt-[34px] rounded border pb-4">
        <div className="px-6">
          <ReactQuill
            theme="snow"
            defaultValue="ferfe"
            modules={modules}
            className="h-[200px] overflow-y-auto rounded border-0"
          />
          <div className="mt-12">
            <QuillHeader />
          </div>
          <div className="mt-12">
            <MyTag />
          </div>
        </div>
      </div>
    </div>
  )
}
