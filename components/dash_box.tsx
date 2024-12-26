import MyIcon from "components/icon"

interface ComponentProps {
  icon: string;
  title: string;
  value: string;
  className?: string;
}

export default function VBox(props: ComponentProps) {
  return (
    <>
    <div className={`h-[143px] p-[20px] space-y-2 rounded bg-white shadow ${props.className}`}>
      <div className="flex items-center justify-between text-xl">
        <MyIcon type={props.icon} />
        <MyIcon type="caret" className="-rotate-90" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-[14px] font-medium leading-[150%] text-gray-500 tracking-normal">{props.title}</div>
        <div className="text-[28px] font-medium leading-[120%] tracking-normal">{props.value}</div>
      </div>
    </div>
    </>
  )
}