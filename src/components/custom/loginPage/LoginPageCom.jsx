import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoEyeOutline, IoMailOutline } from "react-icons/io5";

export default function LoginPageCom() {
  return (
    <section className="py-5 md:p-5">
      <div className="baseContainer flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 md:grid-cols-2">
        <div className="relative w-1/2 hidden md:block">
          <Image
            src="/images/registerlogin/login.png"
            alt="login image"
            width={0}
            height={0}
            sizes="100vw"
            // fill
            style={{ width: "100vw" }}
            className="aspect-[9/16] h-svh object-cover rounded-4xl"
          />
        </div>
        <div className="flex w-full justify-start md:hidden">
          <Link
            href={"/"}
            className="bg-blue-50 p-2 rounded-full flex w-fit justify-center items-center font-semibold gap-2"
          >
            <IoIosArrowBack className="font-semibold" />
            Go Back
          </Link>
        </div>
        <div className="w-full mx-auto gap-5 flex flex-col h-fit max-w-md p-6 rounded-md sm:p-10 border border-gray-200">
          <div className="flex flex-col gap-5 items-center">
            <Link href="/">
              <Image
                src="/images/navbar/logo.png"
                alt="logo"
                width={60}
                height={60}
                className=""
              ></Image>
            </Link>
            <div className="grid text-center">
              <h1 className="my-1 md:my-3 text-3xl md:text-4xl font-semibold">
                Welcome back
              </h1>
              <p className="text-lg md:text-xl">
                Please log in to your account
              </p>
            </div>
          </div>
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-3">
              <div>
                <span
                  htmlFor="emailphone"
                  className="block mb-2 text-xs md:text-sm font-medium"
                >
                  Email/Phone
                </span>
                <label
                  htmlFor="email"
                  className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
                >
                  <div className="">
                    <IoMailOutline className="text-gray-400" />
                  </div>
                  <input
                    required
                    type="text"
                    name="emailphone"
                    id="emailphone"
                    placeholder="Enter Your Email"
                    className="w-full relative py-2"
                  />
                </label>
              </div>
              <div>
                <span
                  htmlFor="password"
                  className="block mb-2 text-xs md:text-sm font-medium"
                >
                  Email/Phone
                </span>
                <label
                  htmlFor="password"
                  className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
                >
                  <div className="">
                    <CiLock className="text-gray-400" />
                  </div>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    className="w-full relative py-2"
                  />
                  <div className="">
                    <IoEyeOutline className="text-gray-700" />
                  </div>
                </label>
                <Link href={""} className="flex w-full text-sm justify-end">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="">
              <div>
                <button
                  type="submit"
                  className="transition-all duration-300 w-full cursor-pointer px-8 py-2 md:py-3 font-semibold bg-blue-600 text-gray-50 hover:bg-blue-500 rounded-full"
                >
                  Login{" "}
                </button>
              </div>

              <p className="px-6 text-sm md:text-md pt-2 text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href={"/register"}
                  type="button"
                  className="hover:underline text-blue-600 cursor-pointer"
                >
                  Create Account
                </Link>
                .
              </p>

              <div className="p-6 text-md text-center ">
                <div className="flex justify-center items-center h-[2px]">
                  <div className="w-12 bg-gray-200 h-[2px]"></div>
                  <div className="bg-white px-2 text-gray-300">Or</div>
                  <div className="w-12 bg-gray-200 h-[2px]"></div>
                </div>
              </div>

              <div className="flex w-full justify-center gap-6">
                <Link href={""} className="bg-gray-200 p-2 rounded-full">
                  <Image
                    src="/images/registerlogin/google.png"
                    alt="google.com image"
                    width={40}
                    height={40}
                    className=""
                  />
                </Link>
                <Link href={""} className="bg-gray-200 p-2 rounded-full">
                  <Image
                    src="/images/registerlogin/facebook.png"
                    alt="facebook.com image"
                    width={40}
                    height={40}
                    className=""
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
