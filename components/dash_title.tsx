"use client"

import Image from "next/image"

export default function DashTitle() {
  return (
    <div>
      <div className="flex items-center space-x-2 text-[24px] leading-[28.8px] font-medium">
        <div>Welcome Brain!</div>
        <Image
          className="visible"
          width={24}
          height={24}
          src="https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113"
          loader={() =>
            "https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113"
          }
          alt="welcome"
          unoptimized={true}
        />
      </div>
    </div>
  )
}
