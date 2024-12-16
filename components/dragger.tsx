import { Upload } from "antd"
import MyIcon from "./icon"

const { Dragger } = Upload

const MyDragger = () => {
  return (
    <Dragger className="bg-white">
      <div>
        <div className="flex justify-center">
          <MyIcon type="upload_cloud" />
        </div>
        <div className="mt-4 flex justify-center space-x-1 text-[14px] font-semibold leading-5">
          <span className="text-[#4b5563]">Drag & drop file here or</span>
          <span className="text-[#0072de]">choose file</span>
        </div>
      </div>
    </Dragger>
  )
}

export default MyDragger
