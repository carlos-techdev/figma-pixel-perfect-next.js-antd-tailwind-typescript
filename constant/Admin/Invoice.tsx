export enum InvoiceStatus {
  PAID = 1,
  CANCELED = 2,
  AWAITING = 3,
  NEW = 4,
  FAILED = 5,
}

export function getStatusClass(s: InvoiceStatus) {
  if (s === InvoiceStatus.PAID) {
    return "text-[#589E67]"
  }
  if (s === InvoiceStatus.CANCELED) {
    return "text-[#AF4B4B]"
  }
  if (s === InvoiceStatus.AWAITING) {
    return "text-[#D28E3D]"
  }
  if (s === InvoiceStatus.NEW) {
    return "text-[#9CA3AF]"
  }
  if (s === InvoiceStatus.FAILED) {
    return "text-[#AF4B4B]"
  }
}

export function getStatusString(s: InvoiceStatus) {
  if (s === InvoiceStatus.PAID) {
    return "Paid"
  }
  if (s === InvoiceStatus.CANCELED) {
    return "Canceled"
  }
  if (s === InvoiceStatus.AWAITING) {
    return "Awaiting Payment"
  }
  if (s === InvoiceStatus.NEW) {
    return "New Order"
  }
  if (s === InvoiceStatus.FAILED) {
    return "Failed"
  }
}

export function DROPZONE() {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 12V21M12.5 12L16.5 16M12.5 12L8.5 16M4.38241 15C3.21469 13.7255 2.5 12.014 2.5 10.1324C2.5 6.19327 5.63205 3 9.49563 3C12.7933 3 15.7243 5.25206 16.4635 8.38285C18.7974 7.51676 21.3781 8.74367 22.2276 11.1232C22.9501 13.1471 22.1876 15.3529 20.5075 16.5"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
