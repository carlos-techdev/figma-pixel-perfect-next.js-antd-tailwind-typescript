import Image from "next/image"
import { useId, useMemo, useState } from "react"
import Select, { SingleValue, StylesConfig } from "react-select"
import countryList from "react-select-country-list"

interface CountryOption {
  label: string
  value: string
}

interface CountrySelectProps {
  className?: string
}

export default function CountrySelect(props: CountrySelectProps) {
  const [value, setValue] = useState<SingleValue<CountryOption>>(null)
  const options = useMemo(() => countryList().getData() as CountryOption[], [])

  const customStyles: StylesConfig<CountryOption, false> = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      // width: '253px',
      height: "48px",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      width: "253px",
      height: "48px",
      alignItems: "center",
    }),
  }

  const formatOptionLabel = ({ label, value }: CountryOption) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
        alt={`${label} flag`}
        width={20}
        height={15}
        style={{ marginRight: 10 }}
      />
      {label}
    </div>
  )

  return (
    <Select
      instanceId={useId()}
      className={`${props.className} ? ${props.className} : h-[48px] w-[253px]`}
      options={options}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      value={value}
      onChange={setValue}
    />
  )
}
