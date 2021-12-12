import { Screen } from './Screen';
import { useHover } from '@react-aria/interactions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const diggit = process.env.DIGGIT;
const doryapi = process.env.DORY_API;
const onlineShop = process.env.ONLINE_SHOP;
const algoLib = process.env.DS_ALGO_LIB;

type Project = {
  name: string;
  description: string;
  image?: string;
  url?: string;
};
const projects = [
  {
    name: 'diggit',
    description:
      'Server-side rendering social media of online communities that allow users to take part in discussions and rating content posted by others similar to Reddit built with TypeScript, Nextjs on top nodejs, and typeORM. ',
    image: diggit,
    url: 'https://diggit.vercel.app/register',
  },
  {
    name: 'doryapi',
    description:
      'An API for Dory App, Dory is an Online Medical Booking App It allows the patient to book appointments, search for doctors and labs, chat with Doctors and Request Home consultations or Home tests built with Nodejs and MongoDB',
    image: doryapi,
    url: 'https://doryapi.herokuapp.com',
  },
  {
    name: 'onlineShop',
    description: 'A smiple online shop build by express and mongoDB',
    image: onlineShop,
    url: 'https://mohaned-online-shop.herokuapp.com',
  },
  {
    name: 'DS and Algo Library',
    description:
      'Implementations of Data Structures and Algorithms in C++ for competitive programming purposes And Solutions forprogramming challenges',
    image: algoLib,
    url: 'https://github.com/MohanedAshraf/competitive-programming',
  },
];
const Project = ({ project }: { project: Project }) => {
  let { hoverProps, isHovered } = useHover({});

  return (
    <Link href={project.url ? project.url : '/'}>
      <a>
        <div {...hoverProps}>
          {
            <Tilt
              transitionSpeed={10000}
              tiltMaxAngleY={8}
              tiltMaxAngleX={8}
              scale={1.01}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareBorderRadius="11px"
            >
              <Screen>
                <div style={{ fontSize: 0 }}>
                  <img
                    src={project.image}
                    alt="Project Preview"
                    width={500}
                    height={300}
                  />
                </div>
              </Screen>
            </Tilt>
          }
          <p className="mt-6 text-xl font-bold text-gray-800">{project.name}</p>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
          {project.url ? (
            <div className="mt-3">
              <span className="font-medium text-gray-800">View Project</span>
            </div>
          ) : null}
        </div>
      </a>
    </Link>
  );
};

export const Projects = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
      <h4 className="mt-2 text-gray-500">
        Some of the side projects I'm currently working on.
      </h4>
      <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6">
        {projects.map((project, i) => {
          return (
            <div className="mt-12 lg:w-1/2 lg:px-6">
              <Project
                project={{
                  name: project.name,
                  description: project.description,
                  image: project.image,
                  url: `${project.url}`,
                }}
                key={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
