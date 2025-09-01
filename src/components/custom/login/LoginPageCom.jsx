import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline, IoMailOutline } from "react-icons/io5";

export default function LoginPageCom() {
  return (
    <section className="p-5 md:p-10">
      <div className="baseContainer grid gap-5 md:gap-10 md:grid-cols-2">
        <Image
          src="/images/login/login.png"
          alt="login image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          className="object-cover aspect-[9/13] rounded-4xl"
        />
        <div className="w-full mx-auto gap-5 flex flex-col max-w-md p-6 rounded-md sm:p-10 border border-gray-200 shadow-xl my-12">
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
              <h1 className="my-3 text-4xl font-semibold">Welcome back</h1>
              <p className="text-xl">Please log in to your account</p>
            </div>
          </div>
          <form noValidate="" action="" className="space-y-8">
            <div className="space-y-4">
              <div>
                <span
                  htmlFor="emailphone"
                  className="block mb-2 text-sm font-medium"
                >
                  Email/Phone
                </span>
                <label
                  htmlFor="email"
                  className="relative flex justify-center items-center gap-2 py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
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
                  className="block mb-2 text-sm font-medium"
                >
                  Email/Phone
                </span>
                <label
                  htmlFor="password"
                  className="relative flex justify-center items-center gap-2 py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
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
                <Link href={""} className="flex w-full justify-end">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="space-y-1">
              <div>
                <button
                  type="submit"
                  className="transition-all duration-300 w-full cursor-pointer px-8 py-3 font-semibold bg-blue-600 text-gray-50 hover:bg-blue-500 rounded-full"
                >
                  Login{" "}
                </button>
              </div>

              <p className="px-6 text-md pt-2 text-center text-gray-600">
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="hover:underline text-blue-600 cursor-pointer"
                >
                  Create Account
                </button>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
