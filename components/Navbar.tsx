import Link from 'next/link';
import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

export const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <Link href="/">
          <a>
            <img className="w-10 logo" alt="Mohaned Ashraf" />
          </a>
        </Link>

        <div className="flex items-center justify-between space-x-8 text-gray-900 md:justify-start">
          <div className="flex space-x-4">
            <Link href="/#about">
              <a className="block font-medium transition-colors hover:text-amber-500">
                About
              </a>
            </Link>
            <Link href="/#projects">
              <a className="block font-medium transition-colors hover:text-amber-500">
                Projects
              </a>
            </Link>
          </div>

          <p className="flex space-x-3 text-xl">
            <a
              href="https://linkedin.com/in/mohanedashraf"
              className="text-gray-900 transition-colors cursor-pointer hover:text-amber-500"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>

            <a
              href="https://github.com/mohanedashraf"
              className="text-gray-900 transition-colors cursor-pointer hover:text-amber-500"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
