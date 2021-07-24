import mohaned from '../public/images/mohaned.jpg';
import Image from 'next/image';
import React from 'react';

export const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="items-center space-x-5 lg:flex lg:-mx-4 ">
        <div className="lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
            Hi <span className="blog-title-emoji">👋</span>, I'm{' '}
            <p className="inline-block text-amber-500">Mohaned Ashraf</p>.
          </h1>

          <div className="mt-4 text-gray-800">
            <p>
              I am computer science fresh grade interested in web development
              currently speak in <strong>javascript</strong> 😀 doing side
              projects with diffrent javascript technologies also interested in
              solving programming challanges.
            </p>
            <p className="mt-2">
              <strong>Welcome</strong> to my website where I share what I'm
              learning &mdash; I'm currently reading{' '}
              <a
                href="/https://www.crackingthecodinginterview.com"
                className="font-bold text-green-400 wavy rotate-4 hover:text-amber-500"
              >
                Cracking the Codeing Interview
              </a>{' '}
              to improve my problem solving skills and obviously cracking the
              interviews.
            </p>
          </div>
        </div>

        <div className="relative flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
          <div className="absolute rounded-full animate-spin-slow w-50 h-50 bg-gradient-to-r from-amber-500"></div>
          <div className="flex items-center p-1 rounded-full w-50 h-50 ">
            <Image
              src={mohaned}
              alt="Profile"
              placeholder="blur"
              priority={true}
              className="rounded-full bg-amber-500"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
