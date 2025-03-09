"use client";

import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Login() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <div className="container flex flex-wrap items-center justify-center lg:justify-between px-6 py-12">
        {/* Left column with image */}
        <div className="hidden md:block md:w-1/2 lg:w-5/12">
          <Image
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            width={500}
            height={500}
            alt="Illustration"
          />
        </div>

        {/* Right column with form */}
        <div className="w-full md:w-1/2 lg:w-5/12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Sign In
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-violet-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600">
              Sign In
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              <FaFacebookF className="mr-2" /> Continue with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              <FaXTwitter className="mr-2" /> Continue with X
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
