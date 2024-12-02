"use client"

import { Button, Input } from "antd"
import Link from "next/link"
import Title from "../title"

const Signup = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col items-center bg-white px-8 pt-32 drop-shadow-md sm:w-1/2">
      <p className="mb-2 text-gray-900 text-[28px] leading-[38px] font-semibold">Reset my password</p>
      <p className="text-gray-600 mb-10 text-sm font-normal">Enter your email to reset your password.</p>
        <div className="w-full max-w-sm">
          <div className="mb-6">
          <Input
              className="h-11 mt-2"
              type="text"
              id="email"
              placeholder="Enter your email address"
              autoComplete="email"
            />
          </div>
          <Button className="mb-6 h-11 w-full bg-black text-base font-medium text-white">Login</Button>
          <div className="flex items-center justify-center space-x-1">
            <p className="text-gray-600 text-sm font-normal">Found your password?</p>
            <Link href="/auth/login" className="text-primary-600">
              <p className="text-[#0072de] text-sm font-semibold">Login here</p>
            </Link>
          </div>
        </div>
      </div>
      <Title />
    </div>
  )
}

export default Signup
