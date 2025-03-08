import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-purple-100">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Portfolio</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 Portfolio —
          <a
            href="https://twitter.com/example"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @example
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};
