import mohaned from '../public/images/mohaned.gif';
import Image from 'next/image';
import clsx from 'clsx';
import React from 'react';

const profile_gif = process.env.PROFILE_GIF;

export const About = ({ spotify }) => {
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
              I am a computer science fresh grade interested in web development
              currently speak in <strong>javascript</strong> 😀 doing side
              projects with different javascript technologies also interested in
              solving programming challenges.
            </p>
            <p className="mt-2">
              <strong>Welcome</strong> to my website where I share what I'm
              learning &mdash; I'm currently reading{' '}
              <a
                href="https://www.crackingthecodinginterview.com"
                className="font-bold text-green-400 wavy rotate-4 hover:text-amber-500"
              >
                Cracking the Coding Interview
              </a>{' '}
              to improve my problem-solving skills and obviously cracking the
              interviews.
            </p>
          </div>
        </div>

        <div className="relative flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
          {spotify?.isPlaying && (
            <div
              className={clsx({
                'absolute rounded-full md:ml-64 lg:ml-0 animate-spin-slow w-50 h-50 bg-gradient-to-r from-spotify':
                  spotify.isPlaying,
                ' ': !spotify.isPlaying,
              })}
            ></div>
          )}

          <div className="flex items-center p-1 rounded-full md:mx-auto w-50 h-50 ">
            <Image
              src={profile_gif}
              alt="Profile"
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
