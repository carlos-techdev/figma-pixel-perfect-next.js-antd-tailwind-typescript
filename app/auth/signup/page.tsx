import { Button, Input } from "antd"
import Link from "next/link"
import MyIcon from "components/icon"
import Title from "../title"

const Signup = () => {
  return (
    <div className="flex h-screen">
      <div className="flex w-full flex-col items-center justify-center bg-white px-8 drop-shadow-md sm:w-1/2">
        <p className="mb-2 text-[32px] font-semibold leading-[38px] text-gray-900">Create an account</p>
        <p className="mb-8 text-sm font-normal text-gray-600">Please enter your details to get started</p>
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Email Address</p>
            <Input className="mt-2 h-11" type="text" id="email" placeholder="Enter your email address" />
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Password</p>
            <Input className="mt-2 h-11" type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Repeat Password</p>
            <Input className="mt-2 h-11" type="password" id="password_confirm" placeholder="Repeat password" />
          </div>

          <Button className="mb-4 h-11 w-full bg-black text-base font-medium text-white">Create my account</Button>
          <div className="mb-4 flex items-center">
            <div className="w-full border-t text-gray-200"></div>
            <span className="px-3 text-sm font-medium text-gray-600">Or</span>
            <div className="w-full border-t text-gray-200 "></div>
          </div>
          <Button className="flex h-11 w-full items-center justify-center">
            <MyIcon type="google" />
            <span className="ml-3 text-base font-medium text-gray-700">Sign Up with Google</span>
          </Button>
          <div className="flex items-center justify-center space-x-1 pt-6">
            <p className="text-sm font-normal text-gray-600">Already have an account?</p>
            <Link href="/auth/login" className="text-primary-600">
              <p className="text-sm font-semibold text-[#0072de]">Login now.</p>
            </Link>
          </div>
        </div>
        <div className="px-12 py-4 text-center text-sm font-normal text-gray-600">
          <span>By creating an account, I agree to the</span>
          <Link href="#" className="mx-1 text-[#0072de]">
            Terms of service
          </Link>
          and
          <Link href="#" className="ml-1 text-[#0072de]">
            Privacy policy
          </Link>
          . I also agree to receive mails and communication relating to Richdata services and offers.
        </div>
      </div>
      <Title />
    </div>
  )
}

export default Signup
