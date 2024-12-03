import { Button, Checkbox, Input } from "antd"
import Link from "next/link"
import MyIcon from "components/icon"
import Title from "../title"

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col items-center justify-center bg-white p-8 drop-shadow-md sm:w-1/2">
        <p className="text-[28px] font-semibold leading-[38px] text-gray-900">Welcome back</p>
        <p className="mb-10 mt-2 text-sm font-normal text-gray-600">Please enter your details to sign in</p>
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Email Address</p>
            <Input
              className="mt-2 h-11"
              type="text"
              id="email"
              placeholder="Enter your email address"
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700">Password</p>
            <Input
              className="mt-2 h-11"
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current_password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" name="remember" />
              <p className="text-sm font-normal text-gray-600">Remember me</p>
            </div>
            <Link href="/auth/reset_pass">
              <p className="text-sm font-semibold text-[#0072de]">Forgot password?</p>
            </Link>
          </div>

          <Button className="mb-4 h-11 w-full bg-black text-base font-medium text-white">Login</Button>
          <div className="mb-4 flex items-center">
            <div className="w-full border-t text-gray-200"></div>
            <span className="px-3 text-sm font-medium text-gray-600">Or</span>
            <div className="w-full border-t text-gray-200 "></div>
          </div>
          <Button className="mb-6 flex h-11 w-full items-center justify-center">
            <MyIcon type="google" width={24} height={24} />
            <span className="ml-3 text-base font-medium text-gray-700">Sign In with Google</span>
          </Button>
          <div className="flex items-center justify-center space-x-1">
            <p className="text-sm font-normal text-gray-600">You&apos;re new here?</p>
            <Link href="/auth/signup" className="text-primary-600">
              <p className="text-sm font-semibold text-[#0072de]">Create an account</p>
            </Link>
          </div>
        </div>
      </div>
      <Title />
    </div>
  )
}

export default Login
