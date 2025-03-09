"use client";
import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-purple-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Portfolio</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/services" className="mr-5 hover:text-gray-900">
            Services
          </Link>
          <Link href="/resume" className="mr-5 hover:text-gray-900">
            Resume
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
        </nav>
        <Link href="/auth">
          <button className="inline-flex items-center bg-violet-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-violet-700 rounded text-base mt-4 md:mt-0">
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
}
