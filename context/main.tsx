import React, { createContext, ReactNode, useState } from "react"

export const HeaderContext = createContext({
  searchVal: "",
  searchDialog: false,
  setSearch: (_val: string) => {},
  setSearchDialogShow: (_flag: boolean) => {},
})

interface AppProviderProps {
  children: ReactNode
}

export const HeaderProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [searchVal, setSearchVal] = useState<string>("")
  const [searchDialog, setSearchDialog] = useState<boolean>(false)

  const setSearch = (str: string) => {
    setSearchVal(str)
  }

  const setSearchDialogShow = (val: boolean) => {
    setSearchDialog(val)
  }

  return (
    <HeaderContext.Provider value={{ searchVal, searchDialog, setSearch, setSearchDialogShow }}>
      {children}
    </HeaderContext.Provider>
  )
}
