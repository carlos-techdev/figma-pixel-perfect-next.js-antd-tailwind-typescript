import { message, Upload } from "antd"
import type { UploadProps } from "antd"
import MyIcon from "./icon"

const { Dragger } = Upload

// const props: UploadProps = {
//   name: "file",
//   multiple: true,
//   action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
//   onChange(info) {
//     const { status } = info.file
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList)
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`)
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`)
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files)
//   },
// }

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
