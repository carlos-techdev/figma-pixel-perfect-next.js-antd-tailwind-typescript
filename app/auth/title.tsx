import Mark from "components/mark"

const Title = () => {
  return (
    <div
      className="hidden w-0 flex-col
       bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-yellow-100 via-20% to-white to-50% pl-7 sm:flex sm:w-1/2"
    >
      <div className="pt-[70px]">
        <Mark width={222} height={44} />
      </div>
      <div className="-mt-28 flex h-full flex-col items-center justify-center text-black">
        <div className="w-full max-w-xl">
          <h1 className="leading-ultimate text-5xl font-bold text-gray-900">
            The Ultimate Growth Platform Powered by AI
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-600">
            Reach and Close More Deals on a Global Scale with all Turbocharged AI Solutions
          </p>
        </div>
      </div>
    </div>
  )
}

export default Title
